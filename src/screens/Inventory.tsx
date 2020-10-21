import React, { useEffect, useState } from 'react'
import { api } from '../api'
import { Schemas } from '../api/schemas'
import { ItemList } from '../components/Items/ItemList'

import { ListFilters } from '../components/ListFilters'

export function Inventory() {
  const [items, setItems] = useState<Schemas.SteamItem[] | null>(null)

  useEffect(() => {
    setItems(null)
    api.get('/profile/inventory').then(response => setItems(response.data))
  }, [])

  return (
    <>
      <ListFilters />
      <ItemList variant="inventory" items={items} />
    </>
  )
}
