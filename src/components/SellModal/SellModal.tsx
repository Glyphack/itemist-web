import React, { useRef, useState } from 'react'
import { useSetRecoilState } from 'recoil'
import {
  Button,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
  ModalFooter,
  SlideFade,
  InputGroup,
  Input,
  InputLeftAddon,
  useToast,
} from '@chakra-ui/react'

import { Schemas } from '../../api/schemas'
import { api } from '../../api'
import { loadingState } from '../../recoil/loading-state'
import { SellToast } from './SellToast'

type SellModalProps = {
  isOpen: boolean
  onClose: () => void
  cancelRef: React.MutableRefObject<never>
  data: Schemas.SteamItem
}

export function SellModal({ isOpen, onClose, cancelRef, data }: SellModalProps) {
  const [price, setPrice] = useState(1000)
  const toast = useToast()
  const toastRef = useRef<string | number | undefined>()
  const setLoading = useSetRecoilState(loadingState)

  const handlePriceChange = ({ target: { value } }: React.ChangeEvent<HTMLInputElement>) => {
    const newPrice = +value || price
    if (newPrice < 1_000 || newPrice > 10_000_000) return
    setPrice(newPrice)
  }

  const submitSellOrder = async () => {
    try {
      onClose()
      setLoading({ isLoading: true })
      const response = await api.post('/sell', {
        price,
        appId: data.appId,
        assetId: data.assetId,
        contextId: data.contextId,
      })
      const offer = response.data.sellOrder.tradeOffer as Schemas.TradeOffer
      toastRef.current = toast({
        duration: 60000,
        isClosable: true,
        render: () => <SellToast offer={offer} toast={toast} toastRef={toastRef} />,
      })
    } catch {
    } finally {
      setLoading({ isLoading: false })
    }
  }

  return (
    <Modal finalFocusRef={cancelRef} onClose={onClose} isOpen={isOpen} isCentered>
      <ModalOverlay>
        <SlideFade in={isOpen} unmountOnExit={false}>
          <ModalContent dir="ltr">
            <ModalHeader fontFamily="arial">Lotus Orb</ModalHeader>
            <ModalCloseButton />
            <ModalBody>
              <InputGroup>
                <InputLeftAddon children="تومان" />
                <Input value={price} onChange={handlePriceChange} />
              </InputGroup>
            </ModalBody>
            <ModalFooter>
              <Button colorScheme="red" variant="ghost" mr={3} onClick={onClose}>
                لغو
              </Button>
              <Button colorScheme="green" onClick={submitSellOrder}>
                فروش
              </Button>
            </ModalFooter>
          </ModalContent>
        </SlideFade>
      </ModalOverlay>
    </Modal>
  )
}
