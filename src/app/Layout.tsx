import React from 'react'
import { Box, useDisclosure } from '@chakra-ui/core'

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
        {children}
      </Box>
      <NavigationDrawer isOpen={isOpen} onClose={onClose} finalFocusRef={btnRef} />
    </>
  )
}
