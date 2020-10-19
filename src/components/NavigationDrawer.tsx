import React, { RefObject } from 'react'
import { useRecoilState } from 'recoil'
import { Link as RouteLink } from 'react-router-dom'
import {
  Drawer,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  DrawerBody,
  Link,
  Avatar,
  Text,
  VStack,
} from '@chakra-ui/core'
import Cookies from 'js-cookie'

import { staticText } from '../app/static-text'
import { useSteamAuth } from '../hooks/use-steam-auth'
import { userState } from '../recoil/user-state'
import { EditableField } from './EditableField/EditableField'
import { Schemas } from '../api/schemas'

type NavigationDrawerProps = {
  isOpen: boolean
  onClose: () => void
  finalFocusRef: RefObject<HTMLElement>
}

export function NavigationDrawer({ isOpen, onClose, finalFocusRef }: NavigationDrawerProps) {
  const [user, setUser] = useRecoilState(userState)
  const handleLogin = useSteamAuth()

  const handleLogout = () => {
    onClose()
    Cookies.remove('access_token')
    setUser(null)
  }

  return (
    <Drawer
      isOpen={isOpen}
      onClose={onClose}
      finalFocusRef={finalFocusRef}
      placement="left"
      size="sm"
    >
      <DrawerOverlay>
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerBody
            as={VStack}
            spacing={6}
            fontSize="3xl"
            textAlign="center"
            justify="center"
            alignItems="center"
          >
            {user && <UserInfo user={user} />}

            {!user && (
              <Link as={RouteLink} to="/" onClick={handleLogin}>
                {staticText.layout.drawer.login}
              </Link>
            )}

            <Link as={RouteLink} to="/shop" onClick={onClose}>
              {staticText.layout.drawer.shop}
            </Link>

            {user && (
              <Link as={RouteLink} to="/inventory" onClick={onClose}>
                {staticText.layout.drawer.inventory}
              </Link>
            )}

            {user && (
              <Link as={RouteLink} to="/" onClick={handleLogout} color="red.500">
                {staticText.layout.drawer.logout}
              </Link>
            )}
          </DrawerBody>
        </DrawerContent>
      </DrawerOverlay>
    </Drawer>
  )
}

type UserInfoProps = {
  user: Schemas.User
}

function UserInfo({ user }: UserInfoProps) {
  return (
    <VStack mb={4} fontSize="lg" color="gray.500">
      <Avatar name={user.name} src={user.avatar} size="2xl" />
      <Text bg="gray.50">{user.name}</Text>
      <EditableField defaultTradeUrl={user.tradeUrl || 'Steam Trade URL'} />
    </VStack>
  )
}
