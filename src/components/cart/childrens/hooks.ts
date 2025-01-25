import { AppDispatch, RootState } from '@/redux/store'
import { filter, find, isNumber, map, sumBy } from 'lodash'
import { useDispatch, useSelector } from 'react-redux'
import {
  ICalculatePaymentFnIn,
  ICalculatePaymentFnOut,
} from '../cart.interface'
import { ICartData, updateCart } from '@/redux/cart.store'

export const useCartHooks = () => {
  const dispatch = useDispatch<AppDispatch>()
  const carts = useSelector((state: RootState) => state.carts.carts)
  const campaigns = useSelector((state: RootState) => state.campaigns.campaigns)

  function sumAllProduct(cartList: ICartData[]) {
    const sumByProduct = map(cartList, function (i) {
      return {
        ...i,
        totalPrice: i.amount * i.product.price,
      }
    })

    return sumBy(sumByProduct, 'totalPrice')
  }

  function sumUnitProducts() {
    return sumBy(carts, 'amount')
  }

  function calDiscountCoupon(subtotal_amount: number, code: string) {
    const findCoupon = find(campaigns, function (f) {
      return f.type === code
    })
    if (!findCoupon) return 0

    if (findCoupon.parameter === 'AMOUNT') {
      return findCoupon.amount
    } else if (findCoupon.parameter === 'PERCENTAGE') {
      return (subtotal_amount * findCoupon.amount) / 100
    }
    return 0
  }

  function calDiscountPromotion(
    subtotal_amount: number,
    code: string,
    point: number,
  ): { onTop: number; point: number } {
    const initialValue = { onTop: 0, point: 0 }
    const findPromotion = find(campaigns, function (f) {
      return f.type === code
    })

    if (!findPromotion) return initialValue

    if (findPromotion.type === 'PERCENTAGE_DISCOUNT_BY_ITEM_CATEGORY') {
      const acceptCategories = findPromotion.accept_product_category
      const cartList = filter(carts, function (i) {
        return acceptCategories.includes(i.product.product_category_type)
      })
      const sumList = sumAllProduct(cartList)

      return { onTop: (sumList * findPromotion.amount) / 100, point: 0 }
    } else if (
      findPromotion.type === 'DISCOUNT_BY_POINT' &&
      isNumber(findPromotion.max)
    ) {
      /*
       limit 20% of total price
       */
      const maxDiscount = (subtotal_amount * findPromotion.max) / 100
      return { onTop: 0, point: point > maxDiscount ? maxDiscount : point }
    }
    return initialValue
  }

  function calDiscountSpecialCampaign(
    amount: number,
    isUseSpecialCampaign: boolean,
  ) {
    if (!isUseSpecialCampaign) return 0
    const findSpecialCampaign = find(campaigns, function (f) {
      return f.type === 'SPECIAL_CAMPAIGNS'
    })

    if (!findSpecialCampaign) return 0

    if (findSpecialCampaign && isNumber(findSpecialCampaign.max)) {
      return (
        Math.floor(amount / findSpecialCampaign.max) *
        findSpecialCampaign.amount
      )
    }

    return 0
  }

  function calculatePayment(
    data: ICalculatePaymentFnIn,
  ): ICalculatePaymentFnOut {
    //Ex: coupon > on top > special
    let releaseAmount = 0
    const subtotalAmount = sumAllProduct(carts)
    const couponDiscount = calDiscountCoupon(subtotalAmount, data.couponCode)

    // release after discount from coupon
    releaseAmount = subtotalAmount - couponDiscount
    const promotionDiscount = calDiscountPromotion(
      releaseAmount,
      data.promotionCode,
      data.point,
    )

    // release after discount from promotion
    releaseAmount -= promotionDiscount.onTop + promotionDiscount.point

    // release after discount special campaign
    const specialDiscount = calDiscountSpecialCampaign(
      releaseAmount,
      data.specialCampaign,
    )
    releaseAmount -= specialDiscount

    const res: ICalculatePaymentFnOut = {
      subtotal_unit: sumUnitProducts(),
      subtotal_amount: subtotalAmount,
      discount_coupon: couponDiscount,
      discount_promotion_on_top: promotionDiscount.onTop,
      discount_promotion_point: promotionDiscount.point,
      discount_special_campaign: specialDiscount,
      total_discount:
        couponDiscount +
        promotionDiscount.onTop +
        promotionDiscount.point +
        specialDiscount,
      total: releaseAmount,
    }
    return res
  }

  function removeItemInCart(id: string) {
    const newCarts = filter(carts, function (i) {
      return i.product.id !== id
    })
    dispatch(updateCart(newCarts))
  }

  function addProductOnCart(id: string) {
    const newCart = map(carts, function (i) {
      return {
        ...i,
        ...(i.product.id === id && {
          amount: i.amount + 1,
        }),
      }
    })
    dispatch(updateCart(newCart))
  }

  function removeProductOnCart(id: string) {
    const newCart = map(carts, function (i) {
      return {
        ...i,
        ...(i.product.id === id && {
          amount: i.amount - 1,
        }),
      }
    })
    dispatch(updateCart(newCart))
  }
  return {
    calculatePayment,
    removeItemInCart,
    addProductOnCart,
    removeProductOnCart,
  }
}
