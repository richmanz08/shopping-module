import { Button } from '@/components/button/button'
import React from 'react'

interface ModalPaymentSuccessProps {
  open: boolean
  onOk: () => void
}

export const ModalPaymentSuccess: React.FC<ModalPaymentSuccessProps> = ({
  open,
  onOk,
}) => {
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
          <div className="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 w-[420px] max-w-[420px]">
            <div className="px-4 pt-5 pb-4 sm:p-6 sm:pb-4 text-center">
              <div className="text-a2">Success</div>
              <div className="text-b5 text-secondary-700 mt-2">
                Your order has been recorded. Once the seller receives it, they
                will verify and process the order based on the address you have
                provided.
              </div>
            </div>
            <div className="px-4 py-4 sm:flex sm:flex-row-reverse">
              <Button
                type="primary"
                buttonText="Ok"
                className="w-full"
                onClick={function () {
                  onOk()
                }}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
