import React from 'react'
import { SimpleGrid } from '@chakra-ui/core'

import { Item, ItemProps } from './Item'

export function ItemList({ variant }: ItemProps) {
  return (
    <SimpleGrid mt={6} spacing={10} minChildWidth="288px">
      {[...new Array(20)].map((_, i) => (
        <Item key={i} variant={variant} />
      ))}
    </SimpleGrid>
  )
}
