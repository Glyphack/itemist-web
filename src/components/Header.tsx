import React from 'react'
import { Flex, Button, useDisclosure, Heading } from '@chakra-ui/core'
import { HiMenu } from 'react-icons/hi'

import { staticText } from '../app/static-text'
import { NavigationDrawer } from './NavigationDrawer'

export function Header() {
  const { isOpen, onOpen, onClose } = useDisclosure()
  const btnRef = React.useRef<HTMLButtonElement>(null!)

  return (
    <>
      <Flex justifyContent="space-between" alignItems="center" px={2} pt={3}>
        <Heading px={3} size="lg">
          {staticText.layout.logo}
        </Heading>
        <Button ref={btnRef} onClick={onOpen} variant="ghost">
          <HiMenu size={32} />
        </Button>
      </Flex>
      <NavigationDrawer isOpen={isOpen} onClose={onClose} finalFocusRef={btnRef} />
    </>
  )
}
