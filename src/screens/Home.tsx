import React from 'react'
import { useSetRecoilState } from 'recoil'
import { Heading, Container, Button } from '@chakra-ui/core'

import { staticText } from '../app/static-text'
import { drawerState } from '../recoil/drawer-state'

export function Home() {
  const setDrawerState = useSetRecoilState(drawerState)

  return (
    <Container mt={48}>
      <Heading size="2xl">{staticText.home.heading}</Heading>
      <Button mt={8} colorScheme="yellow" onClick={() => setDrawerState({ isOpen: true })}>
        {staticText.home.callToAction}
      </Button>
    </Container>
  )
}
