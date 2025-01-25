export interface ICalculatePaymentFnIn {
  couponCode: string
  promotionCode: string
  point: number
  specialCampaign: boolean
}
export interface ICalculatePaymentFnOut {
  subtotal_unit: number
  subtotal_amount: number
  discount_coupon: number
  discount_promotion_on_top: number
  discount_promotion_point: number
  discount_special_campaign: number
  total_discount: number
  total: number
}
