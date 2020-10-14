import React from 'react'
import { Flex, Text, Button } from '@chakra-ui/core'

import { Schemas } from '../../api/schemas'

type ShopItemProps = {
  data: Schemas.Product
}

export function ShopItem({ data }: ShopItemProps) {
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
      <Button colorScheme="blue" w="100%">
        خرید
      </Button>
    </>
  )
}
