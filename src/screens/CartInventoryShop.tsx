import React, { useEffect, useState } from 'react'
import { Flex } from '@chakra-ui/core'

import { Search } from '../components/Search'
import { FilterSelection } from '../components/FilterSelection'
import { ItemList } from '../components/Items/ItemList'
import { ItemProps } from '../components/Items/Item'
import { api } from '../api'

export function CartInventoryShop({ variant }: ItemProps) {
  const [items, setItems] = useState(null)

  useEffect(() => {
    switch (variant) {
      case 'inventory':
        api.get('/profile/inventory').then(response => setItems(response.data))
        break
      case 'shop':
        api.get('/products').then(response => setItems(response.data))
        break
      case 'shopping-cart':
        api.get('/cart').then(response => setItems(response.data))
    }
  }, [variant])

  return (
    <>
      {variant !== 'shopping-cart' ? <ListFilters /> : null}
      <ItemList variant={variant} />
    </>
  )
}

function ListFilters() {
  return (
    <Flex justifyContent="space-between" mb={8}>
      <Search />
      <FilterSelection />
    </Flex>
  )
}
