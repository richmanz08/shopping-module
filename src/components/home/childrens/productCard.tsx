import React from "react";
import { IProductData } from "@/services/product/product-list";
import { StarIcon } from "@heroicons/react/16/solid";
import { formatMoney } from "@/common/function/function";
import { map } from "lodash";

interface ProductCardProps {
  item: IProductData;
  onClickCard: () => void;
}

export const ProductCard: React.FC<ProductCardProps> = (props) => {
  const { item, onClickCard } = props;
  const {
    id,
    image,
    name,
    product_category_type,
    product_type,
    price,
    total_unit,
    rate,
  } = item;

  const starArray = Array.from({ length: rate }, (_, index) => index + 1);

  return (
    <button
      className="h-[400px] w-full border border-outline-grey shadow-md rounded-lg overflow-hidden p-4 cursor-pointer"
      onClick={function () {
        onClickCard();
      }}
    >
      <div className="w-full flex justify-center items-center">
        <img
          src={image[0]}
          alt={`${name} no img`}
          className="w-[160px] h-[240px] object-contain"
        />
      </div>
      <div className="text-secondary-default flex flex-col justify-start">
        <div className="font-standard text-b7 text-left">
          {product_category_type},{product_type}
        </div>
        <div className="font-standard text-a5 text-2-line h-12 text-left">
          {name}
        </div>
        <div className="flex gap-2 items-center">
          <div className="flex gap-[1px]">
            {map(starArray, function (i) {
              return (
                <StarIcon
                  key={`star${i}`}
                  className="size-4 text-warning-300"
                />
              );
            })}
          </div>
          <div className="text-b6">({total_unit} ชิ้น)</div>
        </div>
        <div className="text-t5 text-left">{formatMoney(price)} THB</div>
      </div>
    </button>
  );
};
