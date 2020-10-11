import React from 'react'
import { SimpleGrid } from '@chakra-ui/core'

import { Item, ItemProps } from './Item'
import { Schemas } from '../../api/schemas'

type ItemListProps = ItemProps & {
  items: Schemas.InventoryItem[]
}

export function ItemList({ items, variant }: ItemListProps) {
  return (
    <SimpleGrid mt={6} spacing={10} minChildWidth="288px">
      {items.map((_, i) => (
        <Item key={i} variant={variant} />
      ))}
    </SimpleGrid>
  )
}
