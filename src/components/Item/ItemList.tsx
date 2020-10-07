import React from 'react'
import { VStack } from '@chakra-ui/core'

import { Item } from './Item'

export function ItemList() {
  return (
    <VStack mt={6} spacing={8}>
      <Item />
      <Item />
      <Item />
    </VStack>
  )
}
