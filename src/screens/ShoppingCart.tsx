import React, { useEffect, useState } from 'react'
import { useRecoilValue, useSetRecoilState } from 'recoil'
import { Badge, Button, Flex, VStack } from '@chakra-ui/react'
import { HiCurrencyDollar } from 'react-icons/hi'

import { Schemas } from '../api/schemas'
import { api } from '../api'
import { refetchState } from '../recoil/refetch-state'
import { loadingState } from '../recoil/loading-state'
import { ItemList } from '../components/Items/ItemList'

export function ShoppingCart() {
  const [items, setItems] = useState<Schemas.Product[] | null>(null)
  const refetch = useRecoilValue(refetchState)
  const setLoading = useSetRecoilState(loadingState)

  useEffect(() => {
    setItems(null)
    api.get('/cart').then(response => setItems(response.data.products))
  }, [refetch])

  const handleConfirmPayment = async () => {
    setLoading({ isLoading: true })
    const response = await api.get('/cart/checkout')
    window.location.replace(response.data.paymentUrl)
  }

  return (
    <VStack spacing={8} align="stretch">
      {!!items && (
        <Flex justifyContent={['center', 'center', 'center', 'start']}>
          <Button
            colorScheme="blue"
            leftIcon={<HiCurrencyDollar size={24} />}
            dir="ltr"
            alignSelf="center"
            onClick={handleConfirmPayment}
          >
            پرداخت نهایی
          </Button>
          <Badge
            fontSize="normal"
            px={4}
            mr={4}
            colorScheme="green"
            display="flex"
            justifyContent="center"
            alignItems="center"
          >
            قیمت کل: {items.reduce((total, cur) => total + cur.price, 0)} تومان
          </Badge>
        </Flex>
      )}
      <ItemList variant="shopping-cart" items={items} />
    </VStack>
  )
}
