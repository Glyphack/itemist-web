import React from 'react'
import { Normalize } from 'styled-normalize'

import { ModalProvider } from './contexts/modal-context'
import { GlobalStyles } from './common/styled'
import Layout from './components/Layout'
import Routes from './router/Routes'

function App() {
  return (
    <>
      <Normalize />
      <GlobalStyles />
      <ModalProvider>
        <Layout>
          <Routes />
        </Layout>
      </ModalProvider>
    </>
  )
}

export default App
