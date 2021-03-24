import React, { useEffect } from 'react'
import { useRecoilState, useSetRecoilState } from 'recoil'
import { Box, Container } from '@chakra-ui/react'

import { api } from '../api'
import { userState } from '../recoil/user-state'
import { drawerState } from '../recoil/drawer-state'
import { loadingState } from '../recoil/loading-state'
import { NavigationDrawer } from '../components/NavigationDrawer'
import { Header } from '../components/Header'
import { Loading } from '../components/Loading'
import { useErrorToast } from '../hooks/useErrorToast'
import Cookies from 'js-cookie'

type LayoutProps = {
  children: JSX.Element
}

export function Layout({ children }: LayoutProps) {
  const setUser = useSetRecoilState(userState)
  const setLoading = useSetRecoilState(loadingState)
  const [drawer, setDrawerState] = useRecoilState(drawerState)
  const btnRef = React.useRef<HTMLButtonElement>(null!)
  useErrorToast()

  useEffect(() => {
    if (!Cookies.get('access_token')) return
    setLoading({ isLoading: true })
    api
      .get('/profile')
      .then(response => setUser(response.data))
      .finally(() => setLoading({ isLoading: false }))
  }, [setUser, setLoading])

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
      <Loading />
    </>
  )
}
