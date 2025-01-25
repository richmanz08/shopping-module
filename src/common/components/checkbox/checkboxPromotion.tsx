import { RootState } from '@/redux/store'
import { ICampaignDiscountData } from '@/services/product/campaign-list'
import { map } from 'lodash'
import { PlaytoriumIcon } from 'public/icons'
import React from 'react'
import { useSelector } from 'react-redux'

interface CheckboxPromotionProps {
  list: ICampaignDiscountData[]
  activeKey: string

  onChange: (code: string) => void
}

export const CheckboxPromotion: React.FC<CheckboxPromotionProps> = (props) => {
  const { onChange, list, activeKey } = props
  const userInfo = useSelector((state: RootState) => state.user.user)
  const usePoint = userInfo.point

  function mapDescription(i: ICampaignDiscountData) {
    switch (i.type) {
      case 'DISCOUNT_BY_POINT':
        return `Use playtorium point for discount (1 point = ${i.amount} THB) max ${i.max}% of total price.`
      case 'PERCENTAGE_DISCOUNT_BY_ITEM_CATEGORY':
        return `Discount on participating products ${i.amount}% (Clothing, Accessories, Electronics)`
      default:
        return ''
    }
  }

  return (
    <div className="flex flex-col gap-2">
      {map(list, function (i) {
        const isActive = activeKey === i.type
        const isUsePoint = i.type === 'DISCOUNT_BY_POINT'
        return (
          <button
            key={i.type}
            className={`border ${
              isActive ? 'border-primary-default' : 'border-outline-grey'
            } flex border-2 text-left px-4 py-2 w-full rounded-lg`}
            onClick={function () {
              onChange(isActive ? '' : i.type)
            }}
          >
            {isUsePoint && (
              <div className="size-10 flex justify-center items-center">
                <PlaytoriumIcon />
              </div>
            )}
            <div className="flex flex-col">
              <div className="text-b6">{mapDescription(i)}</div>
              {isUsePoint && isActive && (
                <div>
                  <div className="text-primary-default text-b7">
                    You have {usePoint} point
                  </div>
                </div>
              )}
            </div>
          </button>
        )
      })}
    </div>
  )
}
