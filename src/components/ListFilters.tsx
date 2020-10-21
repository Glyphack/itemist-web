import React from 'react'
import { Flex } from '@chakra-ui/core'

import { Search } from './Search'
import { FilterSelection } from './FilterSelection'

export function ListFilters() {
  return (
    <Flex justifyContent="space-between" mb={8}>
      <Search />
      <FilterSelection />
    </Flex>
  )
}
