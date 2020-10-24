import React, { useEffect, useState } from 'react'
import { VStack } from '@chakra-ui/core'

import { Schemas } from '../api/schemas'
import { api } from '../api'
import { ListFilters } from '../components/ListFilters'
import { ItemList } from '../components/Items/ItemList'

export function Inventory() {
  const [items, setItems] = useState<Schemas.SteamItem[] | null>(null)

  useEffect(() => {
    setItems(null)
    api.get('/profile/inventory').then(response => setItems(response.data))
  }, [])

  return (
    <VStack spacing={8} align="stretch">
      <ListFilters />
      <ItemList variant="inventory" items={items} />
    </VStack>
  )
}
