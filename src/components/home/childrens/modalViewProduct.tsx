import { Button } from '@/common/components/button/button'
import React, { useEffect, useState } from 'react'
import { IProductData } from '@/services/product/product-list'
import { Counter } from '@/common/components/counter/counter'
import { Carousel } from 'antd'
import { map } from 'lodash'
import {
  formatMoney,
  productCategoryMap,
  productTypeMap,
} from '@/common/function/function'
import { IModalViewProductItem } from '../home.interface'
import { XMarkIcon } from '@heroicons/react/24/outline'

interface ModalViewProductProps {
  modalProps: IModalViewProductItem
  onOk: (value: number, productDetail: IProductData) => void
  onCancel: () => void
}

export const ModalViewProduct: React.FC<ModalViewProductProps> = (props) => {
  const { modalProps, onCancel, onOk } = props
  const { open, productItem, promotion, isNewRelease } = modalProps

  const [amount, setAmount] = useState(0)

  const isSoldOut = productItem?.total_unit === 0
  useEffect(() => {
    if (!open) setAmount(0)
  }, [open])

  return (
    <div
      hidden={!open}
      className="relative z-50"
      aria-labelledby="modal-title"
      aria-modal="true"
      role="dialog"
    >
      <div
        className="fixed inset-0 bg-gray-500/75 transition-opacity"
        aria-hidden="true"
      ></div>

      <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
        <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
          <div className="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 w-[896px] max-w-4xl">
            <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
              <div className="flex flex-row gap-4">
                <div className="min-w-[340px] max-w-[340px] h-[440px] border border-outline-grey rounded-lg bg-secondary-500 pb-6 overflow-hidden">
                  <Carousel autoplay>
                    {map(productItem?.image, function (url, index) {
                      return (
                        <div
                          key={`product_img_${index + 1}`}
                          className="rounded-lg"
                        >
                          <div className="text-center bg-primary-default m-0 rounded-lg">
                            <img
                              src={url}
                              alt={`${productItem?.name} no img`}
                              className="w-full h-[400px] object-cover"
                            />
                            <div className="bg-secondary-500 h-10 w-full"></div>
                          </div>
                        </div>
                      )
                    })}
                  </Carousel>
                </div>

                <div className="flex flex-col justify-between w-full">
                  <div>
                    <div className="text-t3 ">{productItem?.name}</div>
                    <div className="text-b5 text-left">
                      {productCategoryMap(
                        productItem?.product_category_type ?? '',
                      )}
                      , {productTypeMap(productItem?.product_type ?? '')}
                    </div>
                    <div className="mt-8">
                      <div className="flex gap-2">
                        {promotion && (
                          <div className="text-green-400 text-t6">
                            {promotion.amount}% Off
                          </div>
                        )}
                        {isNewRelease && (
                          <div className="bg-warning text-t6  w-fit rounded pl-1 pr-2 z-20">
                            <div className="text-secondary-600">Release</div>
                          </div>
                        )}
                      </div>

                      <div className="text-t2 text-left">
                        {formatMoney(productItem?.price ?? 0)} THB
                      </div>
                    </div>
                  </div>

                  <div className="w-full flex justify-start items-start flex-col">
                    <div
                      className={`text-b6 mb-4 ${isSoldOut ? 'text-warm-300' : 'text-secondary-700'}`}
                    >
                      The remaining quantity of the item is{' '}
                      {productItem?.total_unit} pieces.
                    </div>
                    <Counter
                      value={amount}
                      limit={productItem?.total_unit ?? 0}
                      onChange={function (value) {
                        setAmount(value)
                      }}
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="px-4 py-4 sm:flex sm:flex-row-reverse">
              <Button
                disabled={amount < 1}
                type="primary"
                buttonText={isSoldOut ? 'Sold Out' : 'Add to Cart'}
                onClick={function () {
                  if (productItem) onOk(amount, productItem)
                }}
              />
              <Button
                className="mr-2"
                type="primaryOutline"
                buttonText="Cancel"
                onClick={function () {
                  onCancel()
                }}
              />
            </div>
            <div className="absolute right-2 top-2 ">
              <XMarkIcon
                className="size-8 text-secondary-700 cursor-pointer"
                onClick={function () {
                  onCancel()
                }}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
