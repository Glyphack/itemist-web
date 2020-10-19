import React, { useEffect } from 'react'
import { useRecoilState, useSetRecoilState } from 'recoil'
import { Box, Container } from '@chakra-ui/core'

import { Header } from '../components/Header'
import { userState } from '../recoil/user-state'
import { NavigationDrawer } from '../components/NavigationDrawer'
import { api } from '../api'
import { drawerState } from '../recoil/drawer-state'

type LayoutProps = {
  children: JSX.Element
}

export function Layout({ children }: LayoutProps) {
  const setUser = useSetRecoilState(userState)
  const [drawer, setDrawerState] = useRecoilState(drawerState)
  const btnRef = React.useRef<HTMLButtonElement>(null!)

  useEffect(() => {
    api.get('/profile').then(response => setUser(response.data))
  }, [setUser])

  return (
    <>
      <Box color="gray.50" minH="100vh">
        <Header drawerBtnRef={btnRef} onDrawerOpen={() => setDrawerState({ isOpen: true })} />
        <Container minW={['xs', 'xs', 'sm', 'md', 'xl']} my={4}>
          {children}
        </Container>
      </Box>
      <NavigationDrawer
        isOpen={drawer.isOpen}
        onClose={() => setDrawerState({ isOpen: false })}
        finalFocusRef={btnRef}
      />
    </>
  )
}
