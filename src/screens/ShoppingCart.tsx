import React, { useEffect, useState } from 'react'
import { useRecoilValue } from 'recoil'
import { Button, VStack } from '@chakra-ui/core'
import { HiCurrencyDollar } from 'react-icons/hi'

import { Schemas } from '../api/schemas'
import { api } from '../api'
import { ItemList } from '../components/Items/ItemList'
import { ListFilters } from '../components/ListFilters'
import { refetchState } from '../recoil/refetch-state'

export function ShoppingCart() {
  const [items, setItems] = useState<Schemas.Product[] | null>(null)
  const refetch = useRecoilValue(refetchState)

  useEffect(() => {
    setItems(null)
    api.get('/cart').then(response => setItems(response.data.products))
  }, [refetch])

  const handleConfirmPayment = async () => {
    const response = await api.get('/cart/checkout')
    window.location.replace(response.data.paymentUrl)
  }

  return (
    <VStack spacing={8} align="stretch">
      <ListFilters />
      <ItemList variant="shopping-cart" items={items} />
      <Button
        colorScheme="blue"
        leftIcon={<HiCurrencyDollar size={24} />}
        dir="ltr"
        alignSelf="center"
        onClick={handleConfirmPayment}
      >
        پرداخت نهایی
      </Button>
    </VStack>
  )
}
