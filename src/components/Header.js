import React from 'react'
import styled from 'styled-components/macro'
import { HiMenu } from 'react-icons/hi'

import { useModal } from '../contexts/modal-context'
import { IconButton } from '../common/styled'

const Nav = styled.nav`
  background-color: #c5cae9;
  display: flex;
  justify-content: space-between;
  font-size: calc(2rem + 1vw);
  padding: 0.25rem 0.5rem;
`

const Logo = styled.div`
  font-weight: bold;
  padding: 0.5rem;
`

function Header({ logo }) {
  const { setShowModal } = useModal()
  const onMenuClick = () => {
    setShowModal(true)
  }

  return (
    <Nav>
      <Logo>{logo}</Logo>
      <IconButton onClick={onMenuClick}>
        <HiMenu />
      </IconButton>
    </Nav>
  )
}

export default Header
