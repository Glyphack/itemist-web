import React from 'react'
import { Menu, MenuButton, Button, Icon, MenuList, MenuItem } from '@chakra-ui/react'
import { HiChevronDown } from 'react-icons/hi'

import { staticText } from '../app/static-text'

export function FilterSelection() {
  return (
    <Menu placement="bottom-end">
      <MenuButton
        colorScheme="purple"
        as={Button}
        leftIcon={<Icon as={HiChevronDown} />}
        fontWeight="normal"
        dir="ltr"
      >
        {staticText.shop.filter.button}
      </MenuButton>
      <MenuList color="gray.900">
        <MenuItem>{staticText.shop.filter.nameAsc}</MenuItem>
        <MenuItem>{staticText.shop.filter.nameDesc}</MenuItem>
        <MenuItem>{staticText.shop.filter.priceAsc}</MenuItem>
        <MenuItem>{staticText.shop.filter.priceDesc}</MenuItem>
      </MenuList>
    </Menu>
  )
}
