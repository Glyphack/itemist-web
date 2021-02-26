import React from 'react'
import { Skeleton, SimpleGrid } from '@chakra-ui/react'

import { Item, ItemVariant } from './Item'
import { Schemas } from '../../api/schemas'

type ItemsSkeletonProps = {
  variant: ItemVariant
}

const fakeData: Schemas.SteamItem = {
  commodity: 'string',
  marketHashName: 'string',

  appId: 'string',
  classId: 'string',
  instanceId: 'string',
  assetId: 'string',
  contextId: 'string',
  iconUrl: 'string',
  iconUrlLarge: 'string',
  name: 'string',
  nameColor: 'string',
  backgroundColor: 'string',
  type: 'string',
  descriptions: ['string'],
  tags: [
    {
      name: 'string',
      category: 'string',
      color: 'string',
      categoryName: 'string',
    },
  ],
  marketMarketableRestriction: 'string',
  marketName: 'string',
  marketTradableRestriction: 'string',
  marketable: 'string',
}

export function ItemsSkeleton({ variant }: ItemsSkeletonProps) {
  return (
    <SimpleGrid spacing={10} minChildWidth="288px">
      {[...new Array(18)].map((_, i) => (
        <Skeleton key={i}>
          <Item
            iconUrl={fakeData.iconUrl}
            name={fakeData.name}
            nameColor={fakeData.nameColor}
            variant={variant}
            data={fakeData}
          />
        </Skeleton>
      ))}
    </SimpleGrid>
  )
}
