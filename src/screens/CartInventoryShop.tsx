import React, { useEffect, useState } from 'react'
import { Flex } from '@chakra-ui/core'

import { Search } from '../components/Search'
import { FilterSelection } from '../components/FilterSelection'
import { ItemList } from '../components/Items/ItemList'
import { ItemVariant } from '../components/Items/Item'
import { api } from '../api'
import { Schemas } from '../api/schemas'
import { ItemsSkeleton } from '../components/Items/ItemsSkeleton'

type CartInventoryShopProps = {
  variant: ItemVariant
}

export function CartInventoryShop({ variant }: CartInventoryShopProps) {
  const [items, setItems] = useState<Schemas.InventoryItem[] | null>(null)

  useEffect(() => {
    switch (variant) {
      case 'inventory':
        api.get('/profile/inventory').then(response => setItems(response.data.inventory))
        break
      case 'shop':
        api.get('/products').then(response => setItems(response.data.inventory))
        break
      case 'shopping-cart':
        api.get('/cart').then(response => setItems(response.data.inventory))
    }
  }, [variant])

  if (!items) {
    return (
      <>
        {variant !== 'shopping-cart' ? <ListFilters /> : null}
        <ItemsSkeleton variant={variant} />
      </>
    )
  }

  return (
    <>
      {variant !== 'shopping-cart' ? <ListFilters /> : null}
      <ItemList variant={variant} items={items} />
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
