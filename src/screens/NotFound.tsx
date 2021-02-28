import React from 'react'
import { Heading } from '@chakra-ui/react'

export function NotFound() {
  return (
    <Heading as="h1" size="2xl" textAlign="center" mt={32}>
      چیزی پیدا نشد
      <span role="img" aria-label="sad emoji">
        🙁
      </span>
    </Heading>
  )
}
