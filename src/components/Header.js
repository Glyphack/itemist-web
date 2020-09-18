import React from 'react'
import styled from 'styled-components/macro'
import { HiMenu } from 'react-icons/hi'

const Nav = styled.nav`
  background-color: #cfd8dc;
  font-family: Arial, Helvetica, sans-serif;
  display: flex;
  justify-content: space-between;
  font-size: 1.5em;
  padding: 0.75rem 1rem;
`

const Logo = styled.div`
  font-weight: bold;
  font-family: 'Lobster', cursive;
  padding: 0.5rem;
`

const Menu = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0.5rem;
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
