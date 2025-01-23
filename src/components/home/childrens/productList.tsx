import React, { useEffect, useState } from "react";
import { map } from "lodash";
import { ProductCard } from "./productCard";
import { getProductList, IProductData } from "@/services/product/product-list";

interface ProductListProps {}

export const ProductList: React.FC<ProductListProps> = () => {
  const [products, setProducts] = useState<IProductData[]>([]);

  const { data, isLoading } = getProductList();
  console.log({ data });

  useEffect(() => {
    if (data) {
      setProducts(data);
    }
  }, [data]);

  return (
    <div className="mt-8">
      <div className="text-center mb-3">Featured Products</div>
      <div className="grid grid-cols-4 gap-x-3 gap-y-4">
        {map(products, function (i) {
          return <ProductCard key={i.id} item={i} />;
        })}
      </div>
    </div>
  );
};
