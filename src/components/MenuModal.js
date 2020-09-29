import React from 'react'
import { Link as RouterLink } from 'react-router-dom'
import styled from 'styled-components'
import { HiX } from 'react-icons/hi'

import staticTexts from '../staticTexts'
import { useModal } from '../contexts/modal-context'
import { IconButton } from '../common/styled'

const Modal = styled.div`
  background-color: #3f51b5;
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  padding: 0.25rem 0.5rem;
  font-size: calc(2rem + 1vw);
  display: flex;
  flex-direction: column;
  align-items: center;
  color: #eceff1;
`

const CloseButton = styled(IconButton)`
  align-self: flex-end;
  justify-self: flex-start;
`

const Links = styled.div`
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

const Link = styled(RouterLink)`
  margin-bottom: 2rem;
  text-decoration: none;
  color: inherit;
  &:hover {
    color: #8c9eff;
  }
`

function MenuModal() {
  const { showModal, setShowModal } = useModal()
  const onCloseClick = () => {
    setShowModal(false)
  }

  if (!showModal) return null
  return (
    <Modal>
      <CloseButton onClick={onCloseClick}>
        <HiX />
      </CloseButton>
      <Links>
        <Link to="/">{staticTexts.menu.login}</Link>
        <Link to="/">{staticTexts.menu.shop}</Link>
      </Links>
    </Modal>
  )
}

export default MenuModal
