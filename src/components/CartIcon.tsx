import React, { useEffect } from 'react'
import { useRecoilState } from 'recoil'
import { Box, Icon } from '@chakra-ui/react'
import { HiShoppingCart } from 'react-icons/hi'
import { cartState } from '../recoil/cart-state'
import { api } from '../api'
import { Schemas } from '../api/schemas'

export function CartIcon() {
  const [{ count }, setCount] = useRecoilState(cartState)

  const getCartCountFromServer = async () => {
    const { data }: { data: Schemas.Cart } = await api.get('/cart')
    const count = data.products ? data.products.length : 0
    return count
  }

  useEffect(() => {
    getCartCountFromServer().then(count => setCount({ count: count }))
  }, [setCount])

  return (
    <Box>
      <Icon as={HiShoppingCart} boxSize="32px" />
      {count !== 0 && (
        <Box
          borderRadius="50%"
          bgColor="red.500"
          color="gray.50"
          position="absolute"
          top="2px"
          right="2px"
          boxSize={4}
          display="flex"
          justifyContent="center"
          alignItems="center"
          fontSize="10px"
        >
          {count}
        </Box>
      )}
    </Box>
  )
}
