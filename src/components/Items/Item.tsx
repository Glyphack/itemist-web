import React from 'react'
import { Image, VStack, Flex, Text, Button, Heading, Box } from '@chakra-ui/core'

export type ItemProps = {
  variant: 'shop' | 'inventory'
}

export function Item({ variant }: ItemProps) {
  return (
    <Flex justifyContent="center">
      <Image boxSize="128px" />

      <VStack mr={6} justifyContent="space-between" flexGrow={1}>
        <Heading as="h3" size="md" fontFamily="arial">
          Lotus Orb
        </Heading>

        {variant === 'shop' ? <ShopItem /> : <InventoryItem />}
      </VStack>
    </Flex>
  )
}

function ShopItem() {
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
      <Button colorScheme="blue" w="100%">
        خرید
      </Button>
    </>
  )
}

function InventoryItem() {
  return (
    <>
      <Text as="strong" color="gray.600" mr={2}>
        10x
      </Text>
      <Button colorScheme="green" w="100%">
        فروش
      </Button>
    </>
  )
}
