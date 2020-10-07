import React from 'react'
import { Heading, Container, Button } from '@chakra-ui/core'
import { staticText } from '../app/static-text'

export function Home() {
  return (
    <Container mt={48}>
      <Heading size="2xl">{staticText.home.heading}</Heading>
      <Button mt={8}>{staticText.home.callToAction}</Button>
    </Container>
  )
}
