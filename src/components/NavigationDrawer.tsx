import React, { RefObject } from 'react'
import { Link as RouteLink } from 'react-router-dom'
import {
  Drawer,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  DrawerBody,
  Link,
  Stack,
} from '@chakra-ui/core'

import { staticText } from '../app/static-text'

type NavigationDrawerProps = {
  isOpen: boolean
  onClose: () => void
  finalFocusRef: RefObject<HTMLElement>
}

export function NavigationDrawer({ isOpen, onClose, finalFocusRef }: NavigationDrawerProps) {
  return (
    <Drawer
      isOpen={isOpen}
      onClose={onClose}
      finalFocusRef={finalFocusRef}
      placement="left"
      size="full"
    >
      <DrawerOverlay>
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerBody d="flex" flexDir="column" justifyContent="center" alignItems="center">
            <Stack spacing={8} fontSize="3xl" textAlign="center">
              <Link as={RouteLink} to="/" onClick={onClose}>
                {staticText.layout.drawer.login}
              </Link>
              <Link as={RouteLink} to="/shop" onClick={onClose}>
                {staticText.layout.drawer.shop}
              </Link>
            </Stack>
          </DrawerBody>
        </DrawerContent>
      </DrawerOverlay>
    </Drawer>
  )
}
