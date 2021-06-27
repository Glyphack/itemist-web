import React from 'react'
import { ItemList } from '../Items/ItemList'

export function HistoryDetail({ location }: { location: any }) {
  const products = location.state.productHistory.products

  return <ItemList items={products} variant="history-product" />
}
