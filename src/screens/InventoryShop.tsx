import React from 'react'
import { Container, Flex } from '@chakra-ui/core'

import { Search } from '../components/Search'
import { Filter } from '../components/Filter'
import { ItemList } from '../components/Items/ItemList'
import { ItemProps } from '../components/Items/Item'

export function InventoryShop({ variant }: ItemProps) {
  return (
    <Container minW={['xs', 'xs', 'sm', 'md', 'xl']} mb={8}>
      <Flex justifyContent="space-between">
        <Search />
        <Filter />
      </Flex>
      <ItemList variant={variant} />
    </Container>
  )
}
