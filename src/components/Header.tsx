import React from 'react'
import { Flex, IconButton, useDisclosure, Heading } from '@chakra-ui/core'
import { HiMenu } from 'react-icons/hi'

import { staticText } from '../app/static-text'
import { NavigationDrawer } from './NavigationDrawer'

export function Header() {
  const { isOpen, onOpen, onClose } = useDisclosure()
  const btnRef = React.useRef<HTMLButtonElement>(null!)

  return (
    <>
      <Flex justifyContent="space-between" alignItems="center" p={3}>
        <Heading size="lg">{staticText.layout.logo}</Heading>
        <IconButton
          aria-label="open navigation drawer"
          ref={btnRef}
          onClick={onOpen}
          variant="ghost"
          icon={<HiMenu size={32} />}
        />
      </Flex>
      <NavigationDrawer isOpen={isOpen} onClose={onClose} finalFocusRef={btnRef} />
    </>
  )
}
