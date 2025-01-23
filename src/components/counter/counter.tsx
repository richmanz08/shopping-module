import { MinusIcon, PlusIcon } from "@heroicons/react/16/solid";
import React, { useEffect, useState } from "react";

interface CounterProps {
  value: number;
  onChange: (value: number) => void;
  limit: number;
}

export const Counter: React.FC<CounterProps> = (props) => {
  const { value, limit, onChange } = props;
  const [amount, setAmount] = useState(0);

  useEffect(() => {
    onChange(amount);
  }, [amount]);

  return (
    <div className="flex items-center gap-4">
      <button
        disabled={amount === limit}
        className="shadow-md rounded-full p-3 disabled:cursor-not-allowed"
        onClick={function () {
          if (amount < limit) setAmount((prev) => ++prev);
        }}
      >
        <PlusIcon className="size-6 text-secondary-default" />
      </button>
      <div className="text-t3">{value}</div>
      <button
        disabled={amount === 0}
        className="shadow-md rounded-full p-3 disabled:cursor-not-allowed disabled:text-secondary-300"
        onClick={function () {
          if (amount > 0) setAmount((prev) => prev - 1);
        }}
      >
        <MinusIcon className="size-6 text-secondary-default" />
      </button>
    </div>
  );
};
