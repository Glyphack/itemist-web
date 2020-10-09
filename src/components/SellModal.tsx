import React, { useState } from 'react'
import {
  Button,
  Fade,
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
} from '@chakra-ui/core'

type SellModalProps = {
  isOpen: boolean
  onClose: () => void
  cancelRef: React.MutableRefObject<never>
}

export function SellModal({ isOpen, onClose, cancelRef }: SellModalProps) {
  const [price, setPrice] = useState(1000)

  const handlePriceChange = ({ target: { value } }: React.ChangeEvent<HTMLInputElement>) => {
    const newPrice = +value || price
    if (newPrice < 1_000 || newPrice > 10_000_000) return
    setPrice(newPrice)
  }

  return (
    <Fade timeout={300} in={isOpen}>
      {styles => (
        <Modal finalFocusRef={cancelRef} onClose={onClose} isOpen={true} isCentered>
          <ModalOverlay style={styles}>
            <SlideFade timeout={150} in={isOpen} unmountOnExit={false}>
              {styles => (
                <ModalContent style={styles} dir="ltr">
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
                    <Button colorScheme="green">فروش</Button>
                  </ModalFooter>
                </ModalContent>
              )}
            </SlideFade>
          </ModalOverlay>
        </Modal>
      )}
    </Fade>
  )
}
