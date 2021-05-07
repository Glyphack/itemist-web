import { CloseButton } from '@chakra-ui/close-button'
import { Box, Heading, Text } from '@chakra-ui/layout'
import React from 'react'

type ErrorToastProps = {
  title: string
  detail: string
  onClose: any
}

/**
 * An error toast component, used to show a floating error on the screen
 */
export function ErrorToast({ title, detail, onClose }: ErrorToastProps) {
  return (
    <Box bgColor="red.500" borderRadius={4} color="red.50">
      <CloseButton onClick={onClose} />
      <Box pb={4} px={4}>
        <Heading as="h4" size="md">
          {title}
        </Heading>
        <Text>{detail}</Text>
      </Box>
    </Box>
  )
}
