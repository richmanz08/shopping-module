import React, { useEffect, useState } from 'react'
import { IProductData } from '@/services/product/product-list'
import { StarIcon } from '@heroicons/react/16/solid'
import {
  checkIsNewRelease,
  formatMoney,
  productCategoryMap,
  productTypeMap,
} from '@/common/function/function'
import { find, get, map } from 'lodash'
import { PhotoIcon } from '@heroicons/react/24/outline'
import { ICampaignDiscountData } from '@/services/product/campaign-list'

interface ProductCardProps {
  item: IProductData
  promotions: ICampaignDiscountData[]
  onClickCard: (
    promotion: ICampaignDiscountData | null,
    isNewRelease: boolean,
  ) => void
}

export const ProductCard: React.FC<ProductCardProps> = (props) => {
  const { item, onClickCard, promotions } = props
  const {
    id,
    image,
    name,
    product_category_type,
    product_type,
    price,
    total_unit,
    rate,
    create_at,
  } = item

  const [promotion, setPromotion] = useState<ICampaignDiscountData | null>(null)

  const starArray = Array.from({ length: rate }, (_, index) => index + 1)
  const imageURL = get(image, '[0]', null)

  const isNewRelease = checkIsNewRelease(create_at)

  useEffect(() => {
    const findCategoryIsMatchWithPromotion = find(promotions, function (f) {
      return f.accept_product_category.includes(product_category_type)
    })

    if (findCategoryIsMatchWithPromotion)
      setPromotion(findCategoryIsMatchWithPromotion)
  }, [promotions])

  return (
    <button
      key={`btn${id}`}
      className="h-[400px] relative w-full border border-outline-grey shadow-md rounded-lg overflow-hidden p-4 cursor-pointer"
      onClick={function () {
        onClickCard(promotion, isNewRelease)
      }}
    >
      <div className="w-full flex justify-center items-center">
        {imageURL ? (
          <img
            src={imageURL}
            alt={`${name} no img`}
            className="w-full h-[240px] object-cover"
          />
        ) : (
          <div className="flex justify-center items-center w-[160px] h-[240px]">
            <PhotoIcon className="size-16 text-secondary-300" />
          </div>
        )}
      </div>
      <div className="text-secondary-default flex flex-col justify-start">
        <div className="text-b7 text-left">
          {productCategoryMap(product_category_type)},{' '}
          {productTypeMap(product_type)}
        </div>
        <div className="text-a5 text-2-line h-12 text-left">{name}</div>
        <div className="flex gap-2 items-center">
          <div className="flex gap-[1px]">
            {map(starArray, function (i) {
              return (
                <StarIcon
                  key={`star${i}`}
                  className="size-4 text-warning-300"
                />
              )
            })}
          </div>
          <div className="text-b6">({total_unit} pieces)</div>
        </div>
        <div className="text-t5 text-left">{formatMoney(price)} THB</div>
      </div>
      <div className="absolute top-3 left-[0px] flex flex-col gap-1">
        {promotion && (
          <div className="bg-green-600 text-t6 w-fit rounded-e-lg pl-1 pr-2 z-20">
            <div className="text-secondary-600">{promotion.amount}% Off</div>
          </div>
        )}

        {isNewRelease && (
          <div className="bg-warning text-t6  w-fit rounded-e-lg pl-1 pr-2 z-20">
            <div className="text-secondary-600">Release</div>
          </div>
        )}
      </div>
      {total_unit < 1 && (
        <div className="border-4 border-outline-bg opacity-55 absolute top-[30px] left-[-128px] px-3 py-2 text-h5 text-secondary-700 w-96 -rotate-45 spacei">
          SOLD OUT
        </div>
      )}
    </button>
  )
}
