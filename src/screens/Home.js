import React from 'react'
import styled from 'styled-components/macro'

import properties from '../properties'
import { Page } from '../common/styled'

const Wrapper = styled(Page)`
  margin-top: 25vh;
`

const Heading = styled.h1`
  font-size: calc(1.6em + 3vw);
`

const Button = styled.div`
  display: inline-block;
  margin-top: 1rem;
  border: 4px solid #303030;
  color: #303030;
  border-radius: 4px;
  padding: 14px 24px;
  font-size: 1.25rem;
  cursor: pointer;
  &:hover {
    border-color: #3949ab;
    background-color: #3949ab;
    color: #e8eaf6;
    transform: scale(1.1);
  }
`

function Home() {
  return (
    <Wrapper>
      <Heading>{properties.pages.home.heading}</Heading>
      <Button>{properties.pages.home.callToAction}</Button>
    </Wrapper>
  )
}

export default Home
