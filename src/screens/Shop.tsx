import React, { useEffect } from 'react'
import { VStack } from '@chakra-ui/react'
import { api } from '../api'
import { ListFilters } from '../components/ListFilters'
import { ItemList } from '../components/Items/ItemList'
import { useRecoilState } from 'recoil'
import { itemsState } from '../recoil/items-state'

export function Shop() {
  const [items, setItems] = useRecoilState(itemsState)

  useEffect(() => {
    setItems(null)
    api.get('/products').then(response => setItems(response.data))
  }, [setItems])

  return (
    <VStack spacing={8} align="stretch">
      <ListFilters variant="shop" />
      <ItemList variant="shop" items={items} />
    </VStack>
  )
}
