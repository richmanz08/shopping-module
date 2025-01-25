import { useDispatch, useSelector } from 'react-redux'
import { IModalViewProductItem } from '../home.interface'
import { AppDispatch, RootState } from '@/redux/store'
import { IProductData } from '@/services/product/product-list'
import { addCart, updateCart } from '@/redux/cart.store'
import { find, map } from 'lodash'

export const useHomeHooks = () => {
  const dispatch = useDispatch<AppDispatch>()
  const carts = useSelector((state: RootState) => state.carts.carts)
  const initialModalViewProduct: IModalViewProductItem = {
    open: false,
    productItem: null,
    promotion: null,
    isNewRelease: false,
  }

  function onAddProductIntoCartStore(
    value: number,
    productDetail: IProductData,
  ) {
    const { id } = productDetail
    const isDuplicate = find(carts, function (f) {
      return f.product.id === id
    })
    if (!isDuplicate) {
      dispatch(
        addCart({
          product: productDetail,
          amount: value,
        }),
      )
    } else {
      const newCart = map(carts, function (i) {
        return {
          ...i,
          ...(i.product.id === id && {
            amount: i.amount + value,
          }),
        }
      })

      dispatch(updateCart(newCart))
    }
  }
  return { initialModalViewProduct, onAddProductIntoCartStore }
}
