import React, { useEffect, useState } from "react";
import { map } from "lodash";
import { ProductCard } from "./productCard";
import { getProductList } from "@/services/product/product-list";
import { ModalViewProduct } from "./modalViewProduct";
import { useHomeHooks } from "./hooks";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "@/redux/store";
import { loadProduct } from "@/redux/product.store";
import { addCart } from "@/redux/cart.store";

interface ProductListProps {}

export const ProductList: React.FC<ProductListProps> = () => {
  const { initialModalViewProduct } = useHomeHooks();
  const dispatch = useDispatch<AppDispatch>();
  const products = useSelector((state: RootState) => state.products.products);
  const [modalViewProductItem, setModalViewProductItem] = useState(
    initialModalViewProduct
  );

  const { data } = getProductList();

  useEffect(() => {
    if (data) {
      dispatch(loadProduct(data));
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
        onOk={function (value, productDetail) {
          if (value === 0) {
            return;
          }
          // to do add to cart

          dispatch(
            addCart({
              product: productDetail,
              amount: value,
            })
          );
          setModalViewProductItem(initialModalViewProduct);
        }}
      />
    </div>
  );
};
