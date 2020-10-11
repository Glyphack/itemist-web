import React from 'react'
import { Skeleton, SimpleGrid } from '@chakra-ui/core'

import { Item, ItemVariant } from './Item'
import { Schemas } from '../../api/schemas'

type ItemsSkeleton = {
  variant: ItemVariant
}

const fakeData: Schemas.InventoryItem = {
  appid: 'string',
  cotextid: 'string',
  assetid: 'string',
  classid: 'string',
  instanceid: 'string',
  amount: 'string',
  pos: 123,
  background_color: 'string',
  icon_url: 'string',
  icon_url_large: 'string',
  descriptions: {
    type: 'string',
    value: 'string',
    color: 'string',
  },
  name: 'string',
  name_color: 'string',
  type: 'string',
  tags: {
    internal_name: 'string',
    name: 'string',
    category: 'string',
    color: 'string',
    category_name: 'string',
  },
}

export function ItemsSkeleton({ variant }: ItemsSkeleton) {
  return (
    <SimpleGrid mt={6} spacing={10} minChildWidth="288px">
      {[...new Array(20)].map((_, i) => (
        <Skeleton key={i}>
          <Item variant={variant} data={fakeData} />
        </Skeleton>
      ))}
    </SimpleGrid>
  )
}
