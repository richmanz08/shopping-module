import { BanknotesIcon } from '@heroicons/react/24/outline'
import React from 'react'
import day from 'dayjs'

interface CouponProps {
  color: 'sky' | 'orange'
  title: string
  description: string
  parameter: 'AMOUNT' | 'PERCENTAGE'
  expireDate: Date
  value: number
  isSelected: boolean
  onClick: () => void
  isBlur: Boolean
}

export const Coupon: React.FC<CouponProps> = (props) => {
  const {
    color,
    title,
    description,
    parameter,
    expireDate,
    value,
    isSelected,
    isBlur,
    onClick,
  } = props
  const bgGradientCls = {
    sky: 'from-primary-200 via-primary-100 to-primary-100',
    orange: 'from-warm-200 via-warm-100 to-warm-100',
  }
  return (
    <button
      className={`w-full relative flex text-left cursor-pointer overflow-hidden shadow-xl max-w-96 h-32 rounded-lg p-2 bg-gradient-to-r transform active:scale-95 transition-transform duration-300 ease-in-out ${
        bgGradientCls[color]
      } ${isBlur && 'opacity-30'}`}
      onClick={function () {
        onClick()
      }}
    >
      <BanknotesIcon className="size-16 absolute top-6 right-6 opacity-15 flex z-10" />
      <div className="flex flex-nowrap w-full z-20 relative">
        <div className="flex flex-col w-3/4">
          <div className="whitespace-nowrap text-1-line   text-white text-t4">
            {title}
          </div>
          <div className="text-2-line   text-secondary-600 text-b6">
            {description}
          </div>
        </div>
        <div className="w-1/4 flex justify-center items-end">
          <div className="text-h2   text-white">
            {value}
            {parameter === 'PERCENTAGE' ? '%' : ''}
          </div>
        </div>
      </div>
      <div className="text-secondary-400 whitespace-nowrap top-2/3 absolute">
        - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
        -
      </div>
      <div className="bg-gray-100 flex absolute size-6 rounded-full top-2/3 left-[-13px]" />
      <div className="bg-gray-100 flex absolute size-6 rounded-full top-2/3 right-[-13px]" />
      <div className="text-secondary-600   text-b6 absolute bottom-2 left-4">
        Expire date: {day(expireDate).format('YYYY MM DD')}
      </div>
      {isSelected && (
        <div className="text-secondary-default bg-white rounded-3xl px-4 py-1   text-t5 absolute bottom-2 right-6">
          Selected
        </div>
      )}
    </button>
  )
}
