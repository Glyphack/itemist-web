import React from 'react'
import { Skeleton, SimpleGrid } from '@chakra-ui/core'

import { Item, ItemProps } from './Item'

export function ItemsSkeleton({ variant }: ItemProps) {
  return (
    <SimpleGrid mt={6} spacing={10} minChildWidth="288px">
      {[...new Array(20)].map((_, i) => (
        <Skeleton key={i}>
          <Item variant={variant} />
        </Skeleton>
      ))}
    </SimpleGrid>
  )
}
