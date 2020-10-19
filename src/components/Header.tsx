import React, { RefObject } from 'react'
import { useRecoilValue } from 'recoil'
import { Link as RouteLink } from 'react-router-dom'
import { Flex, IconButton, Avatar, Link, Icon } from '@chakra-ui/core'
import { HiMenu } from 'react-icons/hi'

import { staticText } from '../app/static-text'
import { userState } from '../recoil/user-state'
import { CartIcon } from './CartIcon'

type HeaderProps = {
  drawerBtnRef: RefObject<HTMLButtonElement>
  onDrawerOpen: () => void
}

export function Header({ drawerBtnRef, onDrawerOpen }: HeaderProps) {
  const user = useRecoilValue(userState)

  return (
    <Flex justifyContent="space-between" alignItems="center" p={3}>
      <Link fontSize="2xl" fontWeight="bold" size="lg" as={RouteLink} to="/">
        {staticText.layout.logo}
      </Link>
      <Flex alignItems="center">
        {user && (
          <IconButton
            aria-label="open shopping cart"
            variant="ghost"
            colorScheme="green"
            icon={<CartIcon />}
            as={RouteLink}
            to="/shopping-cart"
          />
        )}
        {user && <Avatar name={user.name} src={user.avatar} size="sm" mx={4} />}
        <IconButton
          aria-label="open navigation drawer"
          ref={drawerBtnRef}
          onClick={onDrawerOpen}
          colorScheme="blue"
          variant="ghost"
          icon={<Icon as={HiMenu} boxSize="32px" />}
        />
      </Flex>
    </Flex>
  )
}
