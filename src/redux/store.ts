import { configureStore } from '@reduxjs/toolkit'
import productsReducer from './product.store'
import userReducer from './user.store'
import cartReducer from './cart.store'
import CampaignsDiscountReducer from './campaign.store'

// Create Redux store and combine reducers
const store = configureStore({
  reducer: {
    products: productsReducer,
    user: userReducer,
    carts: cartReducer,
    campaigns: CampaignsDiscountReducer,
  },
  devTools: false,
})

// Export types for root state and dispatch
export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

export default store
