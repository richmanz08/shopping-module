import { ICampaignDiscountData } from '@/services/product/campagin-list'
import { map } from 'lodash'
import { PlaytoriumIcon } from 'public/icons'
import React from 'react'

interface CheckboxPromotionProps {
  list: ICampaignDiscountData[]
  activeKey: string
  onChange: (code: string) => void
}

export const CheckboxPromotion: React.FC<CheckboxPromotionProps> = (props) => {
  const { onChange, list, activeKey } = props

  const description = {
    ['DISCOUNT_BY_POINT']:
      'Use playtorium point for discount (1 point = 1 THB) max 20% of total price.',
    ['PERCENTAGE_DISCOUNT_BY_ITEM_CATEGORY']:
      'Discount on participating products',
  }
  return (
    <div className="flex flex-col gap-2">
      {map(list, function (i) {
        return (
          <button
            key={i.type}
            className={`border ${
              activeKey === i.type
                ? 'border-primary-default'
                : 'border-outline-grey'
            } flex border-2 text-left px-4 py-2 w-full rounded-lg`}
            onClick={function () {
              onChange(i.type)
            }}
          >
            {i.type === 'DISCOUNT_BY_POINT' && (
              <div className="size-10 flex justify-center items-center">
                <PlaytoriumIcon />
              </div>
            )}
            <div className="font-standard text-b6">{description[i.type]}</div>
          </button>
        )
      })}
    </div>
  )
}
