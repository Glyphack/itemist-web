import React from 'react'
import styled from 'styled-components/macro'
import { HiMenu } from 'react-icons/hi'

const Nav = styled.nav`
  background-color: #cfd8dc;
  font-family: Arial, Helvetica, sans-serif;
  display: flex;
  justify-content: space-between;
  font-size: 1.5em;
  padding: 1rem 1.5rem;
`

const Logo = styled.div`
  font-weight: bold;
  font-family: 'Lobster', cursive;
`

const Menu = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`

function Header({ logo }) {
  return (
    <Nav>
      <Logo>{logo}</Logo>
      <Menu>
        <HiMenu />
      </Menu>
    </Nav>
  )
}

export default Header
