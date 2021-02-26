import React from 'react'
import { Flex } from '@chakra-ui/react'

import { Search } from './Search'
import { FilterSelection } from './FilterSelection'

export function ListFilters() {
  return (
    <Flex justifyContent="space-between">
      <Search />
      <FilterSelection />
    </Flex>
  )
}
