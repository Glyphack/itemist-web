import React, { useState } from 'react'
import { useRecoilState, useRecoilValue } from 'recoil'
import { profileModalState } from '../recoil/profile-modal-state'
import {
  Drawer,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  DrawerBody,
  VStack,
  InputGroup,
  Input,
  Text,
  Button,
} from '@chakra-ui/react'
import { api } from '../api'
import { useEffect } from 'react'
import { userState } from '../recoil/user-state'

export function ProfileModal() {
  const [{ isOpen }, setProfileModal] = useRecoilState(profileModalState)
  const user = useRecoilValue(userState)
  const [newTradeUrl, setNewTradeUrl] = useState('')
  const [newEmail, setNewEmail] = useState('')

  const handleSubmit = async () => {
    api.put('/profile', {
      tradeUrl: newTradeUrl,
    })
  }

  useEffect(() => {
    const tradeUrl = user ? user.tradeUrl : ''
    setNewTradeUrl(tradeUrl)
  }, [setNewTradeUrl, user])

  return (
    <Drawer
      isOpen={isOpen}
      onClose={() => setProfileModal({ isOpen: false })}
      placement="right"
      size="sm"
    >
      <DrawerOverlay />
      <DrawerContent>
        <DrawerCloseButton />
        <DrawerBody as={VStack} spacing={6} fontSize="3xl" mt={14}>
          <InputGroup display="flex" flexDir="column">
            <Text fontSize="sm" fontFamily="arial">
              ترید URL
            </Text>
            <Input type="url" onChange={e => setNewTradeUrl(e.target.value)} value={newTradeUrl} />
          </InputGroup>

          <InputGroup display="flex" flexDir="column">
            <Text fontSize="sm">ایمیل</Text>
            <Input type="email" onChange={e => setNewEmail(e.target.value)} value={newEmail} />
          </InputGroup>

          <Button colorScheme="green" onClick={handleSubmit}>
            ذخیره تغیرات
          </Button>
        </DrawerBody>
      </DrawerContent>
    </Drawer>
  )
}
