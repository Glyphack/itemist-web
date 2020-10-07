import React from 'react'
import { Container, Flex } from '@chakra-ui/core'

import { Search } from '../components/Search'
import { Filter } from '../components/Filter'
import { ItemList } from '../components/Item/ItemList'

export function Shop() {
  return (
    <Container>
      <Flex justifyContent="space-between">
        <Search />
        <Filter />
      </Flex>
      <ItemList />
    </Container>
  )
}
