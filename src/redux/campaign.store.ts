import { ICampaignDiscountData } from '@/services/product/campaign-list'
import { createSlice, PayloadAction } from '@reduxjs/toolkit'

interface CartsState {
  campaigns: ICampaignDiscountData[]
}

const initialState: CartsState = {
  campaigns: [],
}

const CampaignDiscountsSlice = createSlice({
  name: 'campaigns',
  initialState,
  reducers: {
    loadCampaigns: (state, action: PayloadAction<ICampaignDiscountData[]>) => {
      state.campaigns = action.payload
    },
  },
})

export const { loadCampaigns } = CampaignDiscountsSlice.actions
export default CampaignDiscountsSlice.reducer
