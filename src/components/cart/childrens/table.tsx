import { XMarkIcon } from '@heroicons/react/24/outline'
import React from 'react'
import { useSelector } from 'react-redux'
import { RootState } from '@/redux/store'
import { map } from 'lodash'
import {
  formatMoney,
  productCategoryMap,
  productTypeMap,
} from '@/common/function/function'
import { Counter } from '@/components/counter/counter'

interface CartTableProps {}

export const CartTable: React.FC<CartTableProps> = (props) => {
  const myCarts = useSelector((state: RootState) => state.carts.carts)
  return (
    <div>
      <div className="text-h2 font-standard">Shopping Cart.</div>
      <div className="overflow-x-auto mt-6">
        <table className="min-w-full table-auto">
          <thead>
            <tr className="">
              <th className="px-4 py-2 text-left font-standard max-w-8">
                Product
              </th>
              <th className="px-4 py-2 text-left font-standard">Quantity</th>
              <th className="px-4 py-2 text-left font-standard whitespace-nowrap">
                Total Price
              </th>
              <th className="px-4 py-2 text-left font-standard"> </th>
            </tr>
          </thead>
          <tbody>
            {map(myCarts, function (i) {
              return (
                <tr className="border-t" key={i.product.id}>
                  <td className="px-4 py-3 max-w-72">
                    <div className="flex flex-nowrap gap-4">
                      <div className="min-w-[100px] h-[100px]">
                        <img
                          src={i.product.image[0]}
                          alt="not-found-img"
                          className="w-full h-full object-contain"
                        />
                      </div>
                      <div>
                        <div className="text-2-line font-standard text-t5">
                          {i.product.name}
                        </div>
                        <div className="font-standard text-b7">
                          {productCategoryMap(i.product.product_category_type)}
                          {', '}
                          {productTypeMap(i.product.product_type)}
                        </div>
                      </div>
                    </div>
                  </td>
                  <td className="px-4 py-3 text-center">
                    <div className="font-standard text-a5">{i.amount}</div>
                  </td>
                  <td className="px-4 py-3 text-center">
                    {formatMoney(i.amount * i.product.price)}
                  </td>
                  <td className="px-4 py-3 text-right">
                    <XMarkIcon className="size-7 cursor-pointer" />
                  </td>
                </tr>
              )
            })}
          </tbody>
        </table>
      </div>
    </div>
  )
}
