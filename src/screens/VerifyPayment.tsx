import React from 'react'
import { useLocation } from 'react-router-dom'
import { Heading } from '@chakra-ui/core'

export function VerifyPayment() {
  const location = useLocation()
  new URLSearchParams(location.search).get('')

  console.log(location)

  return <Heading size="2xl">SUCCESS</Heading>
}
