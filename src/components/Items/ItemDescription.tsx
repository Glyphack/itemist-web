import { Image } from '@chakra-ui/image'
import { Badge, Flex, HStack, Text, VStack } from '@chakra-ui/layout'
import {
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
} from '@chakra-ui/modal'
import React from 'react'
import { Schemas } from '../../api/schemas'

type ItemDescriptionProps = {
  data: Schemas.SteamItem
  isOpen: boolean
  onClose: () => void
}

export function ItemDescription({ data, isOpen, onClose }: ItemDescriptionProps) {
  return (
    <Modal isOpen={isOpen} onClose={onClose} size="5xl" isCentered>
      <ModalOverlay />
      <ModalContent dir="ltr" bgColor="gray.700" fontFamily="arial" color="gray.50">
        <ModalHeader color={`#${data.nameColor}`}>{data.name}</ModalHeader>

        <ModalCloseButton />

        <ModalBody>
          <Flex alignItems="start" justifyContent="space-between">
            <VStack alignItems="start" spacing="3">
              {data.descriptions.map((description, index) => (
                <Text key={index}>{description.value}</Text>
              ))}
              <Text>{data.type}</Text>
              <HStack>
                {data.tags.map((tag, index) => (
                  <Badge
                    bgColor={tag.color ? `#${tag.color}22` : 'gray'}
                    color={`#${tag.color}`}
                    key={index}
                  >
                    {tag.category}: {tag.name}
                  </Badge>
                ))}
              </HStack>
            </VStack>

            <Image src={`https://steamcommunity-a.akamaihd.net/economy/image/${data.iconUrl}`} />
          </Flex>
        </ModalBody>
        <ModalFooter></ModalFooter>
      </ModalContent>
    </Modal>
  )
}
