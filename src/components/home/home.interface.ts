import { ICampaignDiscountData } from '@/services/product/campagin-list'
import { IProductData } from '@/services/product/product-list'

export interface HomeComponentProps {}

export interface IModalViewProductItem {
  open: boolean
  productItem: IProductData | null
  promotion: ICampaignDiscountData | null
  isNewRelease: boolean
}
