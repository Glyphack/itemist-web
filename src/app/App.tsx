import React from 'react'
import { ChakraProvider, theme } from '@chakra-ui/core'

import { Routes } from './Routes'

const customTheme = {
  ...theme,
  styles: {
    global: {
      body: {
        direction: 'rtl',
        fontFamily: 'IranSans',
      },
    },
  },
}

export function App() {
  return (
    <ChakraProvider theme={customTheme}>
      <Routes />
    </ChakraProvider>
  )
}
