import React from 'react'
import { Image, VStack, Flex, Heading } from '@chakra-ui/core'

import { ShopItem } from './ShopItem'
import { InventoryItem } from './InventoryItem'
import { ShoppingCartItem } from './ShoppingCartItem'

export type ItemProps = {
  variant: 'shop' | 'inventory' | 'shopping-cart'
}

export function Item({ variant }: ItemProps) {
  const renderContent = () => {
    switch (variant) {
      case 'shop':
        return <ShopItem />
      case 'inventory':
        return <InventoryItem />
      case 'shopping-cart':
        return <ShoppingCartItem />
      default:
        return null
    }
  }

  return (
    <Flex justifyContent="center">
      <Image boxSize="128px" src="https://bit.ly/dan-abramov" />

      <VStack mr={6} justifyContent="space-between" flexGrow={1}>
        <Heading as="h3" size="md" fontFamily="arial">
          Lotus Orb
        </Heading>
        {renderContent()}
      </VStack>
    </Flex>
  )
}
