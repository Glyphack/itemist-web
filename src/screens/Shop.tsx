import React from 'react'
import { Container, Flex } from '@chakra-ui/core'

import { Search } from '../components/Search'
import { Filter } from '../components/Filter'
import { ShopList } from '../components/Shop/ShopList'

export function Shop() {
  return (
    <Container>
      <Flex justifyContent="space-between">
        <Search />
        <Filter />
      </Flex>
      <ShopList />
    </Container>
  )
}
