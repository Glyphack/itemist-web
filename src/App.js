import React from 'react'
import { Normalize } from 'styled-normalize'

import { GlobalStyles } from './common/styled'
import Routes from './router/Routes'

function App() {
  return (
    <>
      <Normalize />
      <GlobalStyles />
      <Routes />
    </>
  )
}

export default App
