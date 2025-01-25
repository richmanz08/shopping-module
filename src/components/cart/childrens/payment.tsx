import { Button } from '@/components/button/button'
import React, { useMemo, useState } from 'react'
import { useCartHooks } from './hooks'
import { Coupon } from '@/components/coupon/coupon'
import { useSelector } from 'react-redux'
import { AppDispatch, RootState } from '@/redux/store'
import { filter, map } from 'lodash'
import { CheckboxPromotion } from '@/components/checkbox/checkboxPromotion'
import { Switch } from 'antd'

interface PaymentProps {}

export const Payment: React.FC<PaymentProps> = (props) => {
  const { onCheckOut } = useCartHooks()

  const campaigns = useSelector((state: RootState) => state.campaigns.campaigns)

  const [couponCode, setCouponCode] = useState('')
  const [onTopCode, setOnTopCode] = useState('') // this promotion or point
  const [usePoint, setUsePoint] = useState(0)
  const [specialChecked, setSpecialChecked] = useState(true)

  const couponMemoList = useMemo(() => {
    return filter(campaigns, function (f) {
      return f.category === 'COUPON'
    })
  }, [campaigns])

  const promotionOnTopList = useMemo(() => {
    return filter(campaigns, function (f) {
      return f.category === 'ON_TOP'
    })
  }, [campaigns])
  console.log({ couponMemoList, campaigns })

  return (
    <div className="shadow-xl rounded-lg p-4 min-h-[400px] flex flex-col justify-between">
      <div>
        <div className="text-h2  ">Payment Info.</div>
        <div className="text-b5 mb-4">
          You can only use one coupon per order.
        </div>
        <div className="flex gap-4 flex-col">
          {map(couponMemoList, function (i) {
            const selected = couponCode === i.type
            return (
              <Coupon
                key={i.type}
                color={i.parameter === 'AMOUNT' ? 'sky' : 'orange'}
                title={i.name}
                description={i.description}
                expireDate={new Date()}
                value={i.amount}
                parameter={i.parameter}
                isBlur={!selected && couponCode !== ''}
                isSelected={selected}
                onClick={function () {
                  if (selected) {
                    setCouponCode('')
                  } else {
                    setCouponCode(i.type)
                  }
                }}
              />
            )
          })}
        </div>
        <div className="bborder-[0.5px] border-outline-grey my-4" />
        <div className="text-b5  mb-4  ">
          Choose to use a promotional discount or use playtorium points for a
          discount.
        </div>
        <CheckboxPromotion
          activeKey={onTopCode}
          list={promotionOnTopList}
          onChange={function (newValue) {
            setOnTopCode(newValue)
          }}
          onPointChange={function (value) {
            setUsePoint(value)
          }}
        />
        <div className="border-[0.5px] border-outline-grey my-4" />
        <div className="text-t4  ">Special campaign</div>
        <div className="text-b6 mb-4  ">
          For every purchase of 300 THB, you will get a 40 THB discount.
        </div>
        <Switch
          defaultChecked
          value={specialChecked}
          onChange={function () {
            setSpecialChecked(!specialChecked)
          }}
        />
        <div className="mt-4 mb-2 text-t4  ">Order summary</div>
        <div className="flex justify-between items-center">
          <div className="text-secondary-700 text-b6  ">Subtotal (5 items)</div>
          <div className="text-secondary-default   text-t5">฿ {'2044'}</div>
        </div>
        {couponCode !== '' && (
          <div className="flex justify-between items-center">
            <div className="text-secondary-700 text-b6  ">
              Discount from coupon
            </div>
            <div className="text-secondary-default   text-b6">-฿ {'30'}</div>
          </div>
        )}
        {onTopCode !== '' && (
          <div className="flex justify-between items-center">
            {onTopCode === 'DISCOUNT_BY_POINT' ? (
              <>
                <div className="text-secondary-700 text-b6  ">
                  Discount from playtorium point
                </div>
                <div className="text-secondary-default   text-b6">
                  -฿ {'110'}
                </div>
              </>
            ) : (
              <>
                <div className="text-secondary-700 text-b6  ">
                  Discount from promotion on top
                </div>
                <div className="text-secondary-default   text-b6">
                  -฿ {'10'}
                </div>
              </>
            )}
          </div>
        )}
        {specialChecked && (
          <div className="flex justify-between items-center">
            <div className="text-secondary-700 text-b6  ">
              Discount from special campaign
            </div>
            <div className="text-secondary-default   text-b6">-฿ {'10'}</div>
          </div>
        )}
        {couponCode !== '' ||
          onTopCode !== '' ||
          (specialChecked && (
            <div className="flex justify-between items-center">
              <div className="text-secondary-700 text-b6  ">Saved</div>
              <div className="text-warm-300   text-t5">-฿ {'40'}</div>
            </div>
          ))}

        <div className="flex justify-between items-center border-t-[0.5px] mt-2 border-outline-grey">
          <div className="text-secondary-default text-t5  ">Total</div>
          <div className="text-secondary-default   text-t4">฿ {'2240'}</div>
        </div>
      </div>

      <Button
        className="w-full mt-8"
        buttonText="Check Out"
        type="primary"
        onClick={function () {
          onCheckOut()
        }}
      />
    </div>
  )
}
