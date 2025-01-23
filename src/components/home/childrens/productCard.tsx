import Image from "next/image";
import React from "react";
import { IProductData } from "@/services/product/product-list";
import { StarIcon } from "@heroicons/react/16/solid";
import { formatMoney } from "@/common/function/function";

interface ProductCardProps {
  item: IProductData;
}

export const ProductCard: React.FC<ProductCardProps> = (props) => {
  const { item } = props;
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

  return (
    <div className="h-[400px] w-full border border-outline-grey shadow-md rounded-lg overflow-hidden p-2">
      <div>
        <img
          src={image[0]}
          alt={`${name} no img`} // Alt text for accessibility
          className="w-full h-[300px] object-cover"
          // width={500} // The width of the image
          // height={300} // The height of the image
        />
      </div>
      <div className="text-secondary-default">
        <div className="font-standard text-b7">
          {product_category_type},{product_type}
        </div>
        <div className="font-standard text-a5">{name}</div>
        <div className="flex gap-2 items-center">
          <StarIcon className="size-4 text-secondary-default text-warning-300" />
          ({total_unit} ชิ้น)
        </div>
        <div>{formatMoney(price)} THB</div>
      </div>
    </div>
  );
};
