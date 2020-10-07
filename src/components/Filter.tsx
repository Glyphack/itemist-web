import React from 'react'
import { Menu, MenuButton, Button, Icon, MenuList, MenuItem } from '@chakra-ui/core'
import { HiChevronDown } from 'react-icons/hi'

import { staticText } from '../app/static-text'

export function Filter() {
  return (
    <Menu>
      <MenuButton as={Button} leftIcon={<Icon as={HiChevronDown} />} fontWeight="normal" dir="ltr">
        {staticText.shop.filter.button}
      </MenuButton>
      <MenuList>
        <MenuItem>{staticText.shop.filter.nameAsc}</MenuItem>
        <MenuItem>{staticText.shop.filter.nameDesc}</MenuItem>
        <MenuItem>{staticText.shop.filter.priceAsc}</MenuItem>
        <MenuItem>{staticText.shop.filter.priceDesc}</MenuItem>
      </MenuList>
    </Menu>
  )
}
