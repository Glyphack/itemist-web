import React from 'react'
import { VStack } from '@chakra-ui/core'

import { InventoryItem } from './InventoryItem'

export function InventoryList() {
  return (
    <VStack mt={6} spacing={8}>
      <InventoryItem />
      <InventoryItem />
      <InventoryItem />
    </VStack>
  )
}
