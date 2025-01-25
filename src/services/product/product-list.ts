import { useQuery } from '@tanstack/react-query'
import { clientJsonServerAPI } from '../client'

/*
 product interface
*/
export type ProduceCateGoryType =
  | 'CLOTHING'
  | 'ACCESSORIES'
  | 'ELECTRONICS'
  | 'GAMING'
  | 'SPORT'
  | 'TOY'
export type ProductType = 'T-SHIRT' | 'PHONE' | 'TABLET' | 'CAP' | 'KEY_CHAIN'

export interface IProductData {
  id: string
  image: string[]
  name: string
  product_category_type: ProduceCateGoryType
  product_type: ProductType
  price: number
  rate: number
  total_unit: number
}

export const getProductList = () => {
  return useQuery({
    queryKey: ['products'],
    queryFn: async () => {
      try {
        const res = await clientJsonServerAPI.get('products')
        return res.data as IProductData[]
      } catch (error) {
        throw new Error('Exception get product-list')
      }
    },
  })
}
