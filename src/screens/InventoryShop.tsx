import React from 'react'
import { Flex } from '@chakra-ui/core'

import { Search } from '../components/Search'
import { Filter } from '../components/Filter'
import { ItemList } from '../components/Items/ItemList'
import { ItemProps } from '../components/Items/Item'

export function InventoryShop({ variant }: ItemProps) {
  return (
    <>
      <Flex justifyContent="space-between" mb={8}>
        <Search />
        <Filter />
      </Flex>
      <ItemList variant={variant} />
    </>
  )
}
