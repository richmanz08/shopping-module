import { IModalViewProductItem } from "../home.interface";

export const useHomeHooks = () => {
  const initialModalViewProduct: IModalViewProductItem = {
    open: false,
    productItem: null,
  };
  return { initialModalViewProduct };
};
