import React, { useEffect, useState } from 'react'
import { api } from '../api'
import { Schemas } from '../api/schemas'
import { ItemList } from '../components/Items/ItemList'

import { ListFilters } from '../components/ListFilters'

export function Shop() {
  const [items, setItems] = useState<Schemas.Product[] | null>(null)

  useEffect(() => {
    setItems(null)
    api.get('/products').then(response => setItems(response.data))
  }, [])

  return (
    <>
      <ListFilters />
      <ItemList variant="shop" items={items} />
    </>
  )
}
