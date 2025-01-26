import { IProductData } from '@/services/product/product-list'
import { createSlice, PayloadAction } from '@reduxjs/toolkit'

interface ProductsState {
  products: IProductData[]
}

const initialState: ProductsState = {
  products: [],
}

const productsSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {
    loadProduct: (state, action: PayloadAction<IProductData[]>) => {
      state.products = action.payload
    },
  },
})

export const { loadProduct } = productsSlice.actions
export default productsSlice.reducer
