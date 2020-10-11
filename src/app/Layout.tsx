import React, { useEffect } from 'react'
import { useSetRecoilState } from 'recoil'
import { Box, Container, useDisclosure } from '@chakra-ui/core'

import { Header } from '../components/Header'
import { userState } from '../recoil/user-state'
import { NavigationDrawer } from '../components/NavigationDrawer'
import { api } from '../api'

type LayoutProps = {
  children: JSX.Element
}

export function Layout({ children }: LayoutProps) {
  const setUserState = useSetRecoilState(userState)
  const { isOpen, onOpen, onClose } = useDisclosure()
  const btnRef = React.useRef<HTMLButtonElement>(null!)

  useEffect(() => {
    api.get('/profile').then(response => setUserState(response.data))
  }, [setUserState])

  return (
    <>
      <Box color="gray.900" bg="gray.50" minH="100vh">
        <Header drawerBtnRef={btnRef} onDrawerOpen={onOpen} />
        <Container minW={['xs', 'xs', 'sm', 'md', 'xl']} my={4}>
          {children}
        </Container>
      </Box>
      <NavigationDrawer isOpen={isOpen} onClose={onClose} finalFocusRef={btnRef} />
    </>
  )
}
