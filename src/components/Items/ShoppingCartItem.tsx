import React from 'react'
import { Flex, Text, IconButton } from '@chakra-ui/core'
import { HiTrash } from 'react-icons/hi'

export function ShoppingCartItem() {
  return (
    <>
      <Flex>
        <Text color="green.600">
          <strong>100,000</strong>{' '}
          <Text as="small" fontSize="xs">
            تومان
          </Text>
        </Text>
        <Text color="gray.600" mr={2}>
          <strong>10</strong>{' '}
          <Text as="small" fontSize="xs">
            عدد
          </Text>
        </Text>
      </Flex>
      <IconButton
        aria-label="delete current shop item"
        colorScheme="red"
        variant="ghost"
        icon={<HiTrash size="24px" />}
      />
    </>
  )
}
