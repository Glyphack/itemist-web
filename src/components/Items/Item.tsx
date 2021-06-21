import React from 'react'
import { Image, VStack, Flex, Heading, useDisclosure } from '@chakra-ui/react'

import { ShopItem } from './ShopItem'
import { InventoryItem } from './InventoryItem'
import { CartItem } from './CartItem'
import { Schemas } from '../../api/schemas'
import { ItemDescription } from './ItemDescription'
import { HistoryProductItem } from './HistoryProductItem'

export type ItemVariant = 'shop' | 'inventory' | 'shopping-cart' | 'history-product'

type ItemProps = {
  variant: ItemVariant
  data: Schemas.SteamItem | Schemas.Product
  iconUrl: string
  nameColor: string
  name: string
}

export function Item({ variant, data, nameColor, iconUrl, name }: ItemProps) {
  const { isOpen, onOpen, onClose } = useDisclosure()

  const renderContent = () => {
    switch (variant) {
      case 'shop':
        return <ShopItem data={data as Schemas.Product} />
      case 'inventory':
        return <InventoryItem data={data as Schemas.SteamItem} />
      case 'shopping-cart':
        return <CartItem data={data as Schemas.Product} />
      case 'history-product':
        return <HistoryProductItem data={data as Schemas.Product} />
    }
  }

  let descriptionData = (data as Schemas.Product).price
    ? (data as Schemas.Product).steamItem
    : (data as Schemas.SteamItem)

  return (
    <>
      <Flex justifyContent="center" bgColor="gray.700" p={8} borderRadius={2}>
        <Image
          boxSize="128px"
          objectFit="cover"
          borderRadius={2}
          src={`https://steamcommunity-a.akamaihd.net/economy/image/${iconUrl}`}
          cursor="pointer"
          onClick={onOpen}
        />
        <VStack mr={6} justifyContent="space-between" flexGrow={1}>
          <Heading as="h3" size="md" fontFamily="arial" dir="ltr" color={`#${nameColor}`}>
            {name}
          </Heading>
          {renderContent()}
        </VStack>
      </Flex>

      <ItemDescription data={descriptionData} isOpen={isOpen} onClose={onClose} />
    </>
  )
}
