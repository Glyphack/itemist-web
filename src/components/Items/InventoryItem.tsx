import React, { useRef } from 'react'
import { Text, Button, useDisclosure } from '@chakra-ui/core'

import { SellModal } from '../SellModal'

export function InventoryItem() {
  const { isOpen, onOpen, onClose } = useDisclosure()
  const cancelRef = useRef(null!)

  return (
    <>
      <Text as="strong" color="gray.600" mr={2}>
        10x
      </Text>
      <Button colorScheme="green" w="100%" ref={cancelRef} onClick={onOpen}>
        فروش
      </Button>
      <SellModal isOpen={isOpen} onClose={onClose} cancelRef={cancelRef} />
    </>
  )
}
