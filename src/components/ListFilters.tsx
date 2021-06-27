import React from 'react'
import { Flex } from '@chakra-ui/react'
import { Search } from './Search'
import { ItemVariant } from './Items/Item'
// FIXME: Maybe add in future import { FilterSelection } from './FilterSelection'

type ListFiltersProps = {
  variant: ItemVariant
}

export function ListFilters({ variant }: ListFiltersProps) {
  return (
    <Flex justifyContent="space-between">
      <Search variant={variant} />
      {/* FIXME: Maybe add in future <FilterSelection /> */}
    </Flex>
  )
}
