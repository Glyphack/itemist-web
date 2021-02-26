import React, { useState } from 'react'
import { useSetRecoilState } from 'recoil'
import { Flex, Text, Button } from '@chakra-ui/react'

import { Schemas } from '../../api/schemas'
import { cartState } from '../../recoil/cart-state'
import { api } from '../../api'

type ShopItemProps = {
  data: Schemas.Product
}

export function ShopItem({ data }: ShopItemProps) {
  const setCartState = useSetRecoilState(cartState)
  const [isDisabled, setIsDisabled] = useState(false)

  const handleClick = () => {
    setIsDisabled(true)
    setCartState(({ count }) => ({ count: count + 1 }))
    api.post('/cart/add-product', { productId: data._id })
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
      <Button colorScheme="blue" w="100%" disabled={isDisabled} onClick={handleClick}>
        خرید
      </Button>
    </>
  )
}
