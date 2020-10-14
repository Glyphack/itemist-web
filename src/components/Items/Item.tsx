import React from 'react'
import { Image, VStack, Flex, Heading } from '@chakra-ui/core'

import { ShopItem } from './ShopItem'
import { InventoryItem } from './InventoryItem'
import { ShoppingCartItem } from './ShoppingCartItem'
import { Schemas } from '../../api/schemas'

export type ItemVariant = 'shop' | 'inventory' | 'shopping-cart'

type ItemProps = {
  variant: ItemVariant
  data: Schemas.InventoryItem
}

export function Item({ variant, data }: ItemProps) {
  const renderContent = () => {
    switch (variant) {
      case 'shop':
        return <ShopItem />
      case 'inventory':
        return <InventoryItem data={data} />
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
        src={`https://steamcommunity-a.akamaihd.net/economy/image/${data.icon_url}`}
      />
      <VStack mr={6} justifyContent="space-between" flexGrow={1}>
        <Heading as="h3" size="md" fontFamily="arial" dir="ltr" color={`#${data.name_color}`}>
          {data.name}
        </Heading>
        {renderContent()}
      </VStack>
    </Flex>
  )
}
