import { ICampaignDiscountData } from "@/services/product/campagin-list";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface CartsState {
  campaigns: ICampaignDiscountData[];
  loading: boolean;
  error: string | null;
}

const initialState: CartsState = {
  campaigns: [],
  loading: false,
  error: null,
};

const CampaignDiscountsSlice = createSlice({
  name: "campaigns",
  initialState,
  reducers: {
    loadCampaigns: (state, action: PayloadAction<ICampaignDiscountData[]>) => {
      if (!state.campaigns) state.campaigns = action.payload;
    },
  },
});

export const { loadCampaigns } = CampaignDiscountsSlice.actions;
export default CampaignDiscountsSlice.reducer;
