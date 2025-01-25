import React from 'react'
import { CartTable } from './childrens/table'
import { Payment } from './childrens/payment'
import { useSelector } from 'react-redux'
import { RootState } from '@/redux/store'
import { size } from 'lodash'
import { Button } from '../button/button'
import { ShoppingCartIcon } from '@heroicons/react/24/outline'
import { useRouter } from 'next/navigation'

interface CartComponentProps {}

export const CartComponent: React.FC<CartComponentProps> = (props) => {
  const router = useRouter()
  const myCarts = useSelector((state: RootState) => state.carts.carts)

  if (size(myCarts) < 1) {
    return (
      <div className="max-w-screen-xl flex items-center justify-center flex-col pt-[160px]">
        <ShoppingCartIcon className="size-20 text-secondary-default mb-6" />
        <div className="text-h2">You have no items in your cart.</div>
        <Button
          buttonText="Back to shopping"
          type="primary"
          className="mt-4 min-w-fit"
          onClick={function () {
            router.push('/')
          }}
        />
      </div>
    )
  }
  return (
    <div className="grid grid-cols-[2fr,1fr] gap-8 w-full max-w-screen-xl">
      <CartTable />
      <Payment />
    </div>
  )
}
