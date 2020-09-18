import React from 'react'
import { Normalize } from 'styled-normalize'

import { ModalProvider } from './contexts/modal-context'
import { GlobalStyles } from './common/styled'
import Routes from './router/Routes'

function App() {
  return (
    <>
      <Normalize />
      <GlobalStyles />
      <ModalProvider>
        <Routes />
      </ModalProvider>
    </>
  )
}

export default App
