import React from 'react'
import { Image, VStack, Flex, Text, Button, Heading } from '@chakra-ui/core'

export function Item() {
  return (
    <Flex>
      <Image boxSize="128px" />

      <VStack mr={6} justifyContent="space-between">
        <Heading as="h3" size="md" fontFamily="arial">
          Lotus Orb
        </Heading>
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
        <Button colorScheme="blue" w="100%">
          خرید
        </Button>
      </VStack>
    </Flex>
  )
}
