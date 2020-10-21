import React, { useEffect, useState } from 'react'
import { useRecoilValue } from 'recoil'
import { api } from '../api'
import { Schemas } from '../api/schemas'
import { ItemList } from '../components/Items/ItemList'

import { ListFilters } from '../components/ListFilters'
import { refetchState } from '../recoil/refetch-state'

export function ShoppingCart() {
  const [items, setItems] = useState<Schemas.Product[] | null>(null)
  const refetch = useRecoilValue(refetchState)

  useEffect(() => {
    setItems(null)
    api.get('/cart').then(response => setItems(response.data.products))
  }, [refetch])

  return (
    <>
      <ListFilters />
      <ItemList variant="shopping-cart" items={items} />
    </>
  )
}
