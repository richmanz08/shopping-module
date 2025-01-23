import { Button } from "@/components/button/button";
import React, { useState } from "react";
import { IProductData } from "@/services/product/product-list";
import { Counter } from "@/components/counter/counter";
import { Carousel } from "antd";

interface ModalViewProductProps {
  open: boolean;
  productItem: IProductData;
  onOk: () => void;
  onCancel: () => void;
}

const contentStyle: React.CSSProperties = {
  margin: 0,
  height: "160px",
  color: "#fff",
  lineHeight: "160px",
  textAlign: "center",
  background: "#364d79",
};

export const ModalViewProduct: React.FC<ModalViewProductProps> = (props) => {
  const { open, productItem, onCancel, onOk } = props;

  const [amount, setAmount] = useState(0);
  console.log({ amount });

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
          <div className="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg">
            <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
              <div>
                <Carousel afterChange={function () {}}>
                  <div>
                    <h3 style={contentStyle}>1</h3>
                  </div>
                  <div>
                    <h3 style={contentStyle}>2</h3>
                  </div>
                  <div>
                    <h3 style={contentStyle}>3</h3>
                  </div>
                  <div>
                    <h3 style={contentStyle}>4</h3>
                  </div>
                </Carousel>
                <img
                  src={productItem?.image[0]}
                  alt={`${productItem?.name} no img`}
                  className="w-[160px] h-[240px] object-contain"
                />
                <Counter
                  value={amount}
                  limit={productItem?.total_unit}
                  onChange={function (value) {
                    setAmount(value);
                  }}
                  // onDecrease={function () {
                  //   if (amount > 0) setAmount((prev) => prev - 1);
                  // }}
                  // onIncrease={function () {
                  //   if (amount < productItem.total_unit)
                  //     setAmount((prev) => ++prev);
                  // }}
                />
              </div>
            </div>
            <div className="px-4 py-4 sm:flex sm:flex-row-reverse">
              <Button
                disabled={amount < 1}
                type="primary"
                buttonText="Add to Cart"
                onClick={function () {
                  onOk();
                }}
              />
              <Button
                className="mr-2"
                type="primaryOutline"
                buttonText="Cancel"
                onClick={function () {
                  onCancel();
                }}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
