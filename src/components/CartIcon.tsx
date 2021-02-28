import React from 'react'
import { useRecoilValue } from 'recoil'
import { Box, Icon } from '@chakra-ui/react'
import { HiShoppingCart } from 'react-icons/hi'

import { cartState } from '../recoil/cart-state'

export function CartIcon() {
  const { count } = useRecoilValue(cartState)

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
