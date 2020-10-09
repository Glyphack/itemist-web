import React, { RefObject } from 'react'
import { Link as RouteLink } from 'react-router-dom'
import { Flex, IconButton, Avatar, Link, Icon } from '@chakra-ui/core'
import { HiMenu, HiShoppingCart } from 'react-icons/hi'

import { staticText } from '../app/static-text'

type HeaderProps = {
  drawerBtnRef: RefObject<HTMLButtonElement>
  onDrawerOpen: () => void
}

export function Header({ drawerBtnRef, onDrawerOpen }: HeaderProps) {
  return (
    <Flex justifyContent="space-between" alignItems="center" p={3}>
      <Link fontSize="2xl" fontWeight="bold" size="lg" as={RouteLink} to="/">
        {staticText.layout.logo}
      </Link>
      <Flex alignItems="center">
        <IconButton
          aria-label="open shopping cart"
          variant="ghost"
          colorScheme="green"
          icon={<Icon as={HiShoppingCart} boxSize="32px" />}
          as={RouteLink}
          to="/shopping-cart"
        />
        <Avatar name="Dan Abrahmov" src="https://bit.ly/dan-abramov" size="sm" mx={4} />
        <IconButton
          aria-label="open navigation drawer"
          ref={drawerBtnRef}
          onClick={onDrawerOpen}
          variant="ghost"
          icon={<Icon as={HiMenu} boxSize="32px" />}
        />
      </Flex>
    </Flex>
  )
}
