import React from 'react'
import styled from 'styled-components/macro'

import properties from '../properties'
import Header from '../components/Header'

const Page = styled.main`
  min-height: 100vh;
`

const Content = styled.section`
  margin: 25vh 2rem 0;
`

const Heading = styled.h1`
  font-size: calc(1.6em + 3vw);
`

const Button = styled.button`
  margin-top: 1rem;
  border: 4px solid #303030;
  color: #303030;
  border-radius: 4px;
  padding: 14px 24px;
  font-size: 1.25rem;
  cursor: pointer;
  transition: 0.2s;
  &:hover {
    border-color: #3949ab;
    background-color: #3949ab;
    color: #e8eaf6;
    transform: scale(1.1);
  }
`

function Home() {
  return (
    <Page>
      <Header logo={properties.header.logo} />

      <Content>
        <Heading>{properties.pages.home.heading}</Heading>
        <Button>{properties.pages.home.callToAction}</Button>
      </Content>
    </Page>
  )
}

export default Home
