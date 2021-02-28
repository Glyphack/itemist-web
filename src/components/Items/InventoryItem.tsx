import React, { useRef } from 'react'
import { Box, Button, useDisclosure } from '@chakra-ui/react'

import { SellModal } from '../SellModal/SellModal'
import { Schemas } from '../../api/schemas'

type InventoryItemProps = {
  data: Schemas.SteamItem
}

export function InventoryItem({ data }: InventoryItemProps) {
  const { isOpen, onOpen, onClose } = useDisclosure()
  const cancelRef = useRef(null!)

  return (
    <Box w="100%">
      {/* <Text as="strong" color="gray.600" mr={2}>
        {data.amount}
      </Text> */}
      <Button colorScheme="green" w="100%" ref={cancelRef} onClick={onOpen}>
        فروش
      </Button>
      <SellModal data={data} isOpen={isOpen} onClose={onClose} cancelRef={cancelRef} />
    </Box>
  )
}
