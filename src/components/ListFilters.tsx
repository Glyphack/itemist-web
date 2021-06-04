import React from 'react'
import { Flex } from '@chakra-ui/react'

import { Search } from './Search'
// FIXME: Maybe add in future import { FilterSelection } from './FilterSelection'

export function ListFilters() {
  return (
    <Flex justifyContent="space-between">
      <Search />
      {/* FIXME: Maybe add in future <FilterSelection /> */}
    </Flex>
  )
}
