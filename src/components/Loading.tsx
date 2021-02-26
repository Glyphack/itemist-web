import React from 'react'
import { useRecoilValue } from 'recoil'
import { Center, CircularProgress } from '@chakra-ui/react'

import { loadingState } from '../recoil/loading-state'

export function Loading() {
  const { isLoading } = useRecoilValue(loadingState)

  if (!isLoading) return null

  return (
    <Center w="100vw" h="100vh" bg="#000000aa" pos="fixed" top="0" left="0">
      <CircularProgress isIndeterminate />
    </Center>
  )
}
