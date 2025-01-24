import { IProductData } from '@/services/product/product-list'

export interface HomeComponentProps {}

export interface IModalViewProductItem {
  open: boolean
  productItem: IProductData | null
}
