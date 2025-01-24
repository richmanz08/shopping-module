import { Button } from "@/components/button/button";
import React from "react";
import { useCartHooks } from "./hooks";

interface PaymentProps {}

export const Payment: React.FC<PaymentProps> = (props) => {
  const { onCheckOut } = useCartHooks();
  return (
    <div className="bg-gray-100 rounded-lg p-4">
      <div className="text-h2 font-standard">Payment Info.</div>
      <Button
        className="w-full"
        buttonText="Check Out"
        type="primary"
        onClick={function () {
          onCheckOut();
        }}
      />
    </div>
  );
};
