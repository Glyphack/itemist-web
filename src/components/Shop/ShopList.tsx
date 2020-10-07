import React from 'react'
import { VStack } from '@chakra-ui/core'

import { ShopItem } from './ShopItem'

export function ShopList() {
  return (
    <VStack mt={6} spacing={8}>
      <ShopItem />
      <ShopItem />
      <ShopItem />
    </VStack>
  )
}
