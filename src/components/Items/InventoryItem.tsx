import React, { useRef } from 'react'
import { Text, Button, useDisclosure } from '@chakra-ui/core'

import { SellModal } from '../SellModal'
import { Schemas } from '../../api/schemas'

type InventoryItemProps = {
  data: Schemas.InventoryItem
}

export function InventoryItem({ data }: InventoryItemProps) {
  const { isOpen, onOpen, onClose } = useDisclosure()
  const cancelRef = useRef(null!)

  return (
    <>
      <Text as="strong" color="gray.600" mr={2}>
        {data.amount}
      </Text>
      <Button colorScheme="green" w="100%" ref={cancelRef} onClick={onOpen}>
        فروش
      </Button>
      <SellModal data={data} isOpen={isOpen} onClose={onClose} cancelRef={cancelRef} />
    </>
  )
}
