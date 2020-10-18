import React, { useEffect, useState } from 'react'
import { useRecoilValue } from 'recoil'
import { Flex } from '@chakra-ui/core'

import { Search } from '../components/Search'
import { refetchState } from '../recoil/refetch-state'
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
  const [items, setItems] = useState<Schemas.SteamItem[] | Schemas.Product[] | null>(null)
  const refetch = useRecoilValue(refetchState)

  useEffect(() => {
    setItems(null)
    switch (variant) {
      case 'inventory':
        api.get('/profile/inventory').then(response => setItems(response.data))
        break
      case 'shop':
        api.get('/products').then(response => setItems(response.data))
        break
      case 'shopping-cart':
        api.get('/cart').then(response => setItems(response.data.products))
    }
  }, [variant, refetch])

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
