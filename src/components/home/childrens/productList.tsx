import React, { useEffect, useState } from "react";
import { map } from "lodash";
import { ProductCard } from "./productCard";
import { getProductList, IProductData } from "@/services/product/product-list";
import { ModalViewProduct } from "./modalViewProduct";
import { useHomeHooks } from "./hooks";

interface ProductListProps {}

export const ProductList: React.FC<ProductListProps> = () => {
  const { initialModalViewProduct } = useHomeHooks();
  const [products, setProducts] = useState<IProductData[]>([]);
  const [modalViewProductItem, setModalViewProductItem] = useState(
    initialModalViewProduct
  );

  const { data } = getProductList();

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
          return (
            <ProductCard
              key={i.id}
              item={i}
              onClickCard={function () {
                setModalViewProductItem({ open: true, productItem: i });
              }}
            />
          );
        })}
      </div>
      <ModalViewProduct
        open={modalViewProductItem.open}
        productItem={modalViewProductItem.productItem}
        onCancel={function () {
          console.log("ModalViewProduct onCancel");
          setModalViewProductItem(initialModalViewProduct);
        }}
        onOk={function () {}}
      />
    </div>
  );
};
