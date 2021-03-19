import { Box, Heading, Text } from '@chakra-ui/layout'
import React, { useEffect, useState } from 'react'
import { staticText } from '../app/static-text'

export namespace Payment {
  const useOrderId = () => {
    const [orderId, setOrderId] = useState<string | null>(null)

    useEffect(() => {
      const searchParams = new URLSearchParams(window.location.search)
      setOrderId(searchParams.get('orderId'))
    }, [orderId])

    return orderId
  }

  export function Success() {
    const orderId = useOrderId()

    return (
      <Box bgColor="green.500" px={3} py={4} borderRadius="base">
        <Heading as="h2" size="md" lineHeight="1.5">
          {staticText.payment.success.msg}
          <br />
          {staticText.payment.success.number} {orderId}
        </Heading>
      </Box>
    )
  }

  export function Failed() {
    const orderId = useOrderId()

    return (
      <Box bgColor="red.500" px={3} py={4} borderRadius="base">
        <Heading as="h2" size="md" lineHeight="1.5">
          {staticText.payment.error.msg}
          <br />
          {staticText.payment.error.phone}
        </Heading>
        <Text>
          {staticText.payment.error.orderId}
          {orderId}
        </Text>
      </Box>
    )
  }
}
