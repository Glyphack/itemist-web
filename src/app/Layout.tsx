import React from 'react'
import { Box, Container, useDisclosure } from '@chakra-ui/core'

import { Header } from '../components/Header'
import { NavigationDrawer } from '../components/NavigationDrawer'

type LayoutProps = {
  children: JSX.Element
}

export function Layout({ children }: LayoutProps) {
  const { isOpen, onOpen, onClose } = useDisclosure()
  const btnRef = React.useRef<HTMLButtonElement>(null!)

  return (
    <>
      <Box color="gray.900">
        <Header drawerBtnRef={btnRef} onDrawerOpen={onOpen} />
        <Container minW={['xs', 'xs', 'sm', 'md', 'xl']} my={4}>
          {children}
        </Container>
      </Box>
      <NavigationDrawer isOpen={isOpen} onClose={onClose} finalFocusRef={btnRef} />
    </>
  )
}
