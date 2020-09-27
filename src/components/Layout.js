import React from 'react'
import styled from 'styled-components'
import properties from '../properties'

import Header from './Header'

const Wrapper = styled.main`
  min-height: 100vh;
`

function Layout({ children }) {
  return (
    <Wrapper>
      <Header logo={properties.header.logo} />
      {children}
    </Wrapper>
  )
}

export default Layout
