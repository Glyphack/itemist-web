import { Box, Heading } from '@chakra-ui/layout'
import React, { useEffect, useState } from 'react'
import { staticText } from '../app/static-text'

export namespace Payment {
  export function Success() {
    const [refId, setRefId] = useState<string | null>(null)

    useEffect(() => {
      const searchParams = new URLSearchParams(window.location.search)
      setRefId(searchParams.get('refId'))
    }, [refId])

    return (
      <Box bgColor="green.500" px={3} py={4} borderRadius="base">
        <Heading as="h2" size="md" lineHeight="1.5">
          {staticText.payment.success.msg}
          <br />
          {staticText.payment.success.number} {refId}
        </Heading>
      </Box>
    )
  }

  export function Failed() {
    return (
      <Box bgColor="red.500" px={3} py={4} borderRadius="base">
        <Heading as="h2" size="md" lineHeight="1.5">
          {staticText.payment.error.msg}
          <br />
          {staticText.payment.error.phone}
        </Heading>
      </Box>
    )
  }
}
