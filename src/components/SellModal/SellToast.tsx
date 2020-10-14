import React from 'react'
import { Box, CloseButton, Flex, Text } from '@chakra-ui/core'

import { Schemas } from '../../api/schemas'

type SellToastProps = {
  toast: any
  toastRef: React.MutableRefObject<string | number | undefined>
  offer: Schemas.TradeOffer
}

export function SellToast({ toast, toastRef, offer }: SellToastProps) {
  return (
    <Box bgColor="green.400" borderRadius={2} color="white" px={8} py={4}>
      <Flex alignItems="center">
        <CloseButton onClick={() => toast.close(toastRef.current!)} />
        <Text fontWeight="bold" mr={4} mb={1}>
          آفر با موفقیت ارسال شد
        </Text>
      </Flex>
      <Text>لطفا ترید آفر ارسال شده با آی دی: {offer.offerId} را قبول کنید.</Text>
    </Box>
  )
}
