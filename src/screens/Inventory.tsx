import React from 'react'
import { Container, Flex } from '@chakra-ui/core'

import { Search } from '../components/Search'
import { Filter } from '../components/Filter'
import { InventoryList } from '../components/Inventory/InventoryList'

export function Inventory() {
  return (
    <Container>
      <Flex justifyContent="space-between">
        <Search />
        <Filter />
      </Flex>
      <InventoryList />
    </Container>
  )
}
