import React, { RefObject } from 'react'
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

import { staticText } from '../app/static-text'
import { useSteamAuth } from '../hooks/use-steam-auth'
import { EditableField } from './EditableField/EditableField'

type NavigationDrawerProps = {
  isOpen: boolean
  onClose: () => void
  finalFocusRef: RefObject<HTMLElement>
}

export function NavigationDrawer({ isOpen, onClose, finalFocusRef }: NavigationDrawerProps) {
  const handleLogin = useSteamAuth()

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
            <VStack mb={4} fontSize="lg" color="gray.500">
              <Avatar name="Dan Abrahmov" src="https://bit.ly/dan-abramov" size="2xl" />
              <Text bg="gray.50">Dan Abrahmov</Text>
              <EditableField />
            </VStack>

            <Link as={RouteLink} to="/" onClick={handleLogin}>
              {staticText.layout.drawer.login}
            </Link>
            <Link as={RouteLink} to="/shop" onClick={onClose}>
              {staticText.layout.drawer.shop}
            </Link>
            <Link as={RouteLink} to="/inventory" onClick={onClose}>
              {staticText.layout.drawer.inventory}
            </Link>
            <Link as={RouteLink} to="/" onClick={onClose} color="red.500">
              {staticText.layout.drawer.logout}
            </Link>
          </DrawerBody>
        </DrawerContent>
      </DrawerOverlay>
    </Drawer>
  )
}
