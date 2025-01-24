import { useQuery } from "@tanstack/react-query";
import { clientJsonServerAPI } from "../client";
import { ProduceCateGoryType } from "./product-list";

/*
 campaign interface
*/
export type CampaignParameterType = "AMOUNT" | "PERCENTAGE";
export type CampaignCategoryType = "COUPON" | "ON_TOP" | "SEASONAL";

export interface ICampaignDiscountData {
  name: string;
  type: string;
  parameter: CampaignParameterType;
  category: CampaignCategoryType;
  accept_product_category: ProduceCateGoryType[];
  amount: number;
  max: number | null;
  description: string;
}

export const getCampaignList = () => {
  return useQuery({
    queryKey: ["campaigns"],
    queryFn: async () => {
      try {
        const res = await clientJsonServerAPI.get("campaigns");
        return res.data as ICampaignDiscountData[];
      } catch (error) {
        throw new Error("Exception get campaigns-list");
      }
    },
  });
};
