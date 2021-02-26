import React from 'react'
import { InputGroup, InputLeftElement, Input, Icon } from '@chakra-ui/react'
import { HiSearch } from 'react-icons/hi'

import { staticText } from '../app/static-text'

export function Search() {
  return (
    <InputGroup ml={2}>
      <InputLeftElement
        pointerEvents="none"
        children={<Icon as={HiSearch} boxSize={5} color="gray.500" />}
      />
      <Input variant="filled" placeholder={staticText.shop.search} />
    </InputGroup>
  )
}
