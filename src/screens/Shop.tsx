import React, { useEffect, useState } from 'react'
import { VStack } from '@chakra-ui/react'

import { api } from '../api'
import { Schemas } from '../api/schemas'
import { ListFilters } from '../components/ListFilters'
import { ItemList } from '../components/Items/ItemList'

export function Shop() {
  const [items, setItems] = useState<Schemas.Product[] | null>(null)

  useEffect(() => {
    setItems(null)
    api.get('/products').then(response => setItems(response.data))
  }, [])

  return (
    <VStack spacing={8} align="stretch">
      <ListFilters />
      <ItemList variant="shop" items={items} />
    </VStack>
  )
}
