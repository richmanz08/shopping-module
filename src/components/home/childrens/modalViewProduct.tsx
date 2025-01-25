import { Button } from '@/common/components/button/button'
import React, { useEffect, useState } from 'react'
import { IProductData } from '@/services/product/product-list'
import { Counter } from '@/common/components/counter/counter'
import { Carousel } from 'antd'
import { map } from 'lodash'

interface ModalViewProductProps {
  open: boolean
  productItem: IProductData | null
  onOk: (value: number, productDetail: IProductData) => void
  onCancel: () => void
}

export const ModalViewProduct: React.FC<ModalViewProductProps> = (props) => {
  const { open, productItem, onCancel, onOk } = props

  const [amount, setAmount] = useState(0)

  useEffect(() => {
    if (!open) setAmount(0)
  }, [open])

  return (
    <div
      hidden={!open}
      className="relative z-10"
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
                <div className="w-[320px] h-[440px] border border-outline-grey rounded-lg bg-secondary-500 pb-6">
                  <Carousel autoplay>
                    {map(productItem?.image, function (url, index) {
                      return (
                        <div key={`product_img_${index + 1}`}>
                          <div className="text-center bg-primary-default m-0">
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
                  <div className="text-t3  ">{productItem?.name}</div>
                  <div className="w-full flex justify-start">
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
                buttonText="Add to Cart"
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
          </div>
        </div>
      </div>
    </div>
  )
}
