import { Flex, Text } from '@chakra-ui/react'
import React from 'react'
import { Schemas } from '../../api/schemas'

type HistoryProductItemProps = {
  data: Schemas.Product
}

export function HistoryProductItem({ data }: HistoryProductItemProps) {
  return (
    <Flex>
      <Text color="green.600">
        <strong>{data.price}</strong>{' '}
        <Text as="small" fontSize="xs">
          تومان
        </Text>
      </Text>
    </Flex>
  )
}
