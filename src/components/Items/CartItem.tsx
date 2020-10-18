import React from 'react'
import { useSetRecoilState } from 'recoil'
import { Flex, Text, IconButton } from '@chakra-ui/core'
import { HiTrash } from 'react-icons/hi'

import { Schemas } from '../../api/schemas'
import { api } from '../../api'
import { refetchState } from '../../recoil/refetch-state'
import { cartState } from '../../recoil/cart-state'

type CartItemProps = {
  data: Schemas.Product
}

export function CartItem({ data }: CartItemProps) {
  const setRefetch = useSetRecoilState(refetchState)
  const setCartState = useSetRecoilState(cartState)

  const handleDelete = async () => {
    await api.post('/cart/remove-product', { productId: data._id })
    setRefetch(prev => !prev)
    setCartState(({ count }) => ({ count: count - 1 }))
  }

  return (
    <>
      <Flex>
        <Text color="green.600">
          <strong>{data.price}</strong>{' '}
          <Text as="small" fontSize="xs">
            تومان
          </Text>
        </Text>
        {/* <Text color="gray.600" mr={2}>
          <strong>10</strong>{' '}
          <Text as="small" fontSize="xs">
            عدد
          </Text>
        </Text> */}
      </Flex>
      <IconButton
        aria-label="delete current shop item"
        colorScheme="red"
        variant="ghost"
        icon={<HiTrash size="24px" />}
        onClick={handleDelete}
      />
    </>
  )
}
