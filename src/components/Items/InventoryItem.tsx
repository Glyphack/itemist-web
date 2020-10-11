import React, { useRef } from 'react'
import { Text, Button, useDisclosure } from '@chakra-ui/core'

import { SellModal } from '../SellModal'

type InventoryItemProps = {
  amount: string
}

export function InventoryItem({ amount }: InventoryItemProps) {
  const { isOpen, onOpen, onClose } = useDisclosure()
  const cancelRef = useRef(null!)

  return (
    <>
      <Text as="strong" color="gray.600" mr={2}>
        {amount}
      </Text>
      <Button colorScheme="green" w="100%" ref={cancelRef} onClick={onOpen}>
        فروش
      </Button>
      <SellModal isOpen={isOpen} onClose={onClose} cancelRef={cancelRef} />
    </>
  )
}
