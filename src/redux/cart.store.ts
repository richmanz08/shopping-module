import { IProductData } from '@/services/product/product-list'
import { createSlice, PayloadAction } from '@reduxjs/toolkit'

interface ICartData {
  product: IProductData
  amount: number
}

interface CartsState {
  carts: ICartData[]
}

const initialState: CartsState = {
  carts: [],
}

const CartsSlice = createSlice({
  name: 'carts',
  initialState,
  reducers: {
    addCart: (state, action: PayloadAction<ICartData>) => {
      state.carts.push(action.payload)
    },
    updateCart: (state, action: PayloadAction<ICartData[]>) => {
      state.carts = [...action.payload]
    },
  },
})

export const { addCart, updateCart } = CartsSlice.actions
export default CartsSlice.reducer
