import { IProductData } from "@/services/product/product-list";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface ProductsState {
  products: IProductData[];
}

const initialState: ProductsState = {
  products: [],
};

const productsSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    loadProduct: (state, action: PayloadAction<IProductData[]>) => {
      state.products = action.payload;
    },
    addProduct: (state, action: PayloadAction<IProductData>) => {
      state.products.push(action.payload);
    },
    removeProduct: (state, action: PayloadAction<string>) => {
      state.products = state.products.filter(
        (product) => product.id !== action.payload
      );
    },
    updateProduct: (state, action: PayloadAction<IProductData>) => {
      const index = state.products.findIndex(
        (product) => product.id === action.payload.id
      );
      if (index !== -1) {
        state.products[index] = action.payload;
      }
    },
  },
});

export const { addProduct, removeProduct, updateProduct, loadProduct } =
  productsSlice.actions;
export default productsSlice.reducer;
