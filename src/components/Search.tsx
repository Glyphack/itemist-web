import React, { useState } from 'react'
import { InputGroup, InputLeftElement, Input, Icon, Box } from '@chakra-ui/react'
import { HiSearch } from 'react-icons/hi'
import { staticText } from '../app/static-text'
import { useSetRecoilState } from 'recoil'
import { itemsState } from '../recoil/items-state'
import { api, EndpointTypes } from '../api'
import { ItemVariant } from './Items/Item'

type SearchProps = {
  variant: ItemVariant
}

export function Search({ variant }: SearchProps) {
  const [searchValue, setSearchValue] = useState('')
  const setItems = useSetRecoilState(itemsState)

  const handleSubmit = async (event: React.SyntheticEvent) => {
    event.preventDefault()

    let route: EndpointTypes.Get
    switch (variant) {
      case 'inventory':
        route = '/profile/inventory'
        break
      case 'shop':
        route = '/products'
        break
      default:
        throw new Error('Unknown variant!')
    }

    setItems(null)
    const response = await api.get(route, {
      params: { name: searchValue },
    })
    setItems(response.data)
  }

  return (
    <Box as="form" onSubmit={handleSubmit} w="100%">
      <InputGroup ml={2}>
        <InputLeftElement
          pointerEvents="none"
          children={<Icon as={HiSearch} boxSize={5} color="gray.500" />}
        />
        <Input
          variant="filled"
          placeholder={staticText.shop.search}
          fontFamily="Arial"
          onChange={v => setSearchValue(v.target.value)}
        />
      </InputGroup>
    </Box>
  )
}
