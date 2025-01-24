import { AppDispatch, RootState } from "@/redux/store";
import { map, sumBy } from "lodash";
import { useDispatch, useSelector } from "react-redux";

export const useCartHooks = () => {
  const dispatch = useDispatch<AppDispatch>();
  const carts = useSelector((state: RootState) => state.carts.carts);

  function onCheckOut() {
    const sumByProduct = map(carts, function (i) {
      return {
        ...i,
        totalPrice: i.amount * i.product.price,
      };
    });
    // Sum up the totalPrice for each item in the sumByProduct array
    const total = sumBy(sumByProduct, "totalPrice");
    console.log({ sumByProduct, total });
  }
  return { onCheckOut };
};
