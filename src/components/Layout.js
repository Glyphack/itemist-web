import React from 'react'
import styled from 'styled-components'
import staticTexts from '../staticTexts'

import Header from './Header'

const Wrapper = styled.main`
  min-height: 100vh;
`

function Layout({ children }) {
  return (
    <Wrapper>
      <Header logo={staticTexts.header.logo} />
      {children}
    </Wrapper>
  )
}

export default Layout
