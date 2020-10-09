import React from 'react'
import { Flex } from '@chakra-ui/core'

import { Search } from '../components/Search'
import { FilterSelection } from '../components/FilterSelection'
import { ItemList } from '../components/Items/ItemList'
import { ItemProps } from '../components/Items/Item'

export function InventoryShop({ variant }: ItemProps) {
  return (
    <>
      <Flex justifyContent="space-between" mb={8}>
        <Search />
        <FilterSelection />
      </Flex>
      <ItemList variant={variant} />
    </>
  )
}
