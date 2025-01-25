export function formatMoney(value: number) {
  const formatter = new Intl.NumberFormat('en-US', {
    style: 'decimal',
    minimumFractionDigits: 0,
    maximumFractionDigits: 2,
  })
  return formatter.format(value)
}

export function productCategoryMap(str: string) {
  switch (str) {
    case 'CLOTHING':
      return 'Clothing'
    case 'ACCESSORIES':
      return 'Accessories'
    case 'ELECTRONICS':
      return 'Electronics'
    case 'GAMING':
      return 'Gaming'
    case 'SPORT':
      return 'Sport'
    case 'TOY':
      return 'Toy'
    default:
      return 'Unknown category'
  }
}

export function productTypeMap(str: string) {
  switch (str) {
    case 'T-SHIRT':
      return 'T-Shirt'
    case 'PHONE':
      return 'Phone'
    case 'TABLET':
      return 'Tablet'
    case 'CAP':
      return 'Cap'
    case 'PANT':
      return 'Pant'
    case 'KEY_CHAIN':
      return 'Key chain'
    default:
      return 'Unknown product type'
  }
}
