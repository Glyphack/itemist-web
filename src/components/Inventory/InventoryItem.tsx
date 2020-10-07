import React from 'react'
import { Image, VStack, Flex, Text, Button, Heading } from '@chakra-ui/core'

export function InventoryItem() {
  return (
    <Flex>
      <Image boxSize="128px" />

      <VStack mr={6} justifyContent="space-between" minWidth={[0, '3xs']}>
        <Heading as="h3" size="md" fontFamily="arial">
          Lotus Orb
        </Heading>
        <Text as="strong" color="gray.600" mr={2}>
          10x
        </Text>
        <Button colorScheme="green" w="100%">
          خرید
        </Button>
      </VStack>
    </Flex>
  )
}
