import React from 'react'
import { SimpleGrid } from '@chakra-ui/core'

import { Item, ItemVariant } from './Item'
import { Schemas } from '../../api/schemas'
import { ItemsSkeleton } from './ItemsSkeleton'

type ItemListProps = {
  items: (Schemas.Product | Schemas.SteamItem)[] | null
  variant: ItemVariant
}

export function ItemList({ items, variant }: ItemListProps) {
  if (!items) return <ItemsSkeleton variant={variant} />

  return (
    <SimpleGrid mt={6} spacing={10} minChildWidth="288px">
      {items.map(item => {
        if ('price' in item) {
          return (
            <Item
              key={item.steamItem.appId + item.steamItem.contextId + item.steamItem.assetId}
              variant={variant}
              data={item}
              iconUrl={item.steamItem.iconUrl}
              name={item.steamItem.name}
              nameColor={item.steamItem.nameColor}
            />
          )
        } else {
          return (
            <Item
              key={item.appId + item.contextId + item.assetId}
              variant={variant}
              data={item}
              iconUrl={item.iconUrl}
              name={item.name}
              nameColor={item.nameColor}
            />
          )
        }
      })}
    </SimpleGrid>
  )
}
