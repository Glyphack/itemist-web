import React from 'react'
import { Image, VStack, Flex, Heading } from '@chakra-ui/core'

import { ShopItem } from './ShopItem'
import { InventoryItem } from './InventoryItem'
import { ShoppingCartItem } from './ShoppingCartItem'
import { Schemas } from '../../api/schemas'

export type ItemVariant = 'shop' | 'inventory' | 'shopping-cart'

type ItemProps = {
  variant: ItemVariant
  data: Schemas.SteamItem | Schemas.Product
  iconUrl: string
  nameColor: string
  name: string
}

export function Item({ variant, data, nameColor, iconUrl, name }: ItemProps) {
  const renderContent = () => {
    switch (variant) {
      case 'shop':
        return <ShopItem data={data as Schemas.Product} />
      case 'inventory':
        return <InventoryItem data={data as Schemas.SteamItem} />
      case 'shopping-cart':
        return <ShoppingCartItem />
    }
  }

  return (
    <Flex justifyContent="center" bgColor="gray.700" p={8} borderRadius={2}>
      <Image
        boxSize="128px"
        objectFit="cover"
        borderRadius={2}
        src={`https://steamcommunity-a.akamaihd.net/economy/image/${iconUrl}`}
      />
      <VStack mr={6} justifyContent="space-between" flexGrow={1}>
        <Heading as="h3" size="md" fontFamily="arial" dir="ltr" color={`#${nameColor}`}>
          {name}
        </Heading>
        {renderContent()}
      </VStack>
    </Flex>
  )
}
