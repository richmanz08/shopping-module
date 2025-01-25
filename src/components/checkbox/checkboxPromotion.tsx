import { RootState } from '@/redux/store'
import { ICampaignDiscountData } from '@/services/product/campagin-list'
import { Slider } from 'antd'
import { map } from 'lodash'
import { PlaytoriumIcon } from 'public/icons'
import React from 'react'
import { useSelector } from 'react-redux'

interface CheckboxPromotionProps {
  list: ICampaignDiscountData[]
  activeKey: string
  onChange: (code: string) => void
  onPointChange: (value: number) => void
}

export const CheckboxPromotion: React.FC<CheckboxPromotionProps> = (props) => {
  const { onChange, list, activeKey, onPointChange } = props
  const userInfo = useSelector((state: RootState) => state.user.user)
  const usePoint = userInfo.point

  function mapDescription(code: string) {
    switch (code) {
      case 'DISCOUNT_BY_POINT':
        return 'Use playtorium point for discount (1 point = 1 THB) max 20% of total price.'
      case 'PERCENTAGE_DISCOUNT_BY_ITEM_CATEGORY':
        return 'Discount on participating products'
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
              if (!isActive && isUsePoint) {
                onPointChange(0)
              }
            }}
          >
            {isUsePoint && (
              <div className="size-10 flex justify-center items-center">
                <PlaytoriumIcon />
              </div>
            )}
            <div className="flex flex-col">
              <div className="text-b6">{mapDescription(i.type)}</div>
              {isUsePoint && isActive && (
                <div
                  onClick={function (e) {
                    e.stopPropagation()
                  }}
                >
                  <Slider
                    min={0}
                    max={usePoint ?? 0}
                    defaultValue={usePoint > 1 ? (usePoint ?? 0) / 2 : usePoint}
                    onChange={function (value) {
                      onPointChange(value)
                    }}
                    style={{ marginBottom: 0 }}
                  />
                  <div className="text-primary-default text-b7">
                    You have {usePoint ?? 0} point
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
