import React, { useEffect, useMemo, useState } from 'react'
import { filter, size, map } from 'lodash'
import { ProductCard } from './productCard'
import { getProductList } from '@/services/product/product-list'
import { ModalViewProduct } from './modalViewProduct'
import { useHomeHooks } from './hooks'
import { useDispatch, useSelector } from 'react-redux'
import { AppDispatch, RootState } from '@/redux/store'
import { loadProduct } from '@/redux/product.store'
import { ActiveKeyType, Filter } from './filter'

interface ProductListProps {}

export const ProductList: React.FC<ProductListProps> = () => {
  const { initialModalViewProduct, onAddProductIntoCartStore } = useHomeHooks()
  const dispatch = useDispatch<AppDispatch>()
  const campaigns = useSelector((state: RootState) => state.campaigns.campaigns)
  const products = useSelector((state: RootState) => state.products.products)

  const [activeFilter, setActiveFilter] = useState<ActiveKeyType>('all')
  const [modalViewProductItem, setModalViewProductItem] = useState(
    initialModalViewProduct,
  )

  const { data } = getProductList()

  const promotions = useMemo(() => {
    return filter(campaigns, function (f) {
      return f.category === 'ON_TOP' && size(f.accept_product_category) > 0
    })
  }, [campaigns])

  const productList = useMemo(() => {
    if (activeFilter === 'new') {
      return [...products].sort(
        (a, b) =>
          new Date(b.create_at).getTime() - new Date(a.create_at).getTime(),
      )
    } else if (activeFilter === 'top') {
      return [...products].sort((a, b) => b.rate - a.rate)
    } else if (activeFilter === 'price') {
      return [...products].sort((a, b) => b.price - a.price)
    } else {
      return products
    }
  }, [products, activeFilter])

  useEffect(() => {
    if (data) {
      dispatch(loadProduct(data))
    }
  }, [data])

  return (
    <div className="mt-8">
      <div className="text-center mb-3 text-h3">Featured Products</div>
      <Filter
        activeKey={activeFilter}
        onChange={function (val) {
          setActiveFilter(val)
        }}
      />
      <div className="grid grid-cols-4 gap-x-3 gap-y-4 mt-8">
        {map(productList, function (i) {
          return (
            <ProductCard
              key={i.id}
              item={i}
              promotions={promotions}
              onClickCard={function (promotion, newRelease) {
                setModalViewProductItem({
                  open: true,
                  productItem: i,
                  promotion,
                  isNewRelease: newRelease,
                })
              }}
            />
          )
        })}
      </div>
      <ModalViewProduct
        modalProps={modalViewProductItem}
        onCancel={function () {
          console.log('ModalViewProduct onCancel')
          setModalViewProductItem(initialModalViewProduct)
        }}
        onOk={function (value, productDetail) {
          if (value === 0) {
            return
          }
          onAddProductIntoCartStore(value, productDetail)
          setModalViewProductItem(initialModalViewProduct)
        }}
      />
    </div>
  )
}
