import React from 'react'
import { Box } from '@chakra-ui/core'

import { Header } from './Header'

type LayoutProps = {
  children: JSX.Element
}

export function Layout({ children }: LayoutProps) {
  return (
    <Box color="gray.900">
      <Header />
      {children}
    </Box>
  )
}
