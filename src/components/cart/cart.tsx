import React from 'react'
import { CartTable } from './childrens/table'
import { Payment } from './childrens/payment'

interface CartComponentProps {}

export const CartComponent: React.FC<CartComponentProps> = (props) => {
  return (
    <div className="grid grid-cols-[2fr,1fr] gap-8 w-full max-w-screen-xl">
      <CartTable />
      <Payment />
    </div>
  )
}
