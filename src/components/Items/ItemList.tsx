import React from 'react'
import { SimpleGrid } from '@chakra-ui/core'

import { Item, ItemVariant } from './Item'
import { Schemas } from '../../api/schemas'

type ItemListProps = {
  items: Schemas.InventoryItem[]
  variant: ItemVariant
}

export function ItemList({ items, variant }: ItemListProps) {
  return (
    <SimpleGrid mt={6} spacing={10} minChildWidth="288px">
      {items.map(item => (
        <Item key={item.pos} variant={variant} data={item} />
      ))}
    </SimpleGrid>
  )
}
