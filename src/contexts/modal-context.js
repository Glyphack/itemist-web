import React, { useState } from 'react'

const ModalStateContext = React.createContext()
const ModalDispatchContext = React.createContext()

function ModalProvider({ children }) {
  const [show, setShow] = useState(false)

  return (
    <ModalStateContext.Provider value={show}>
      <ModalDispatchContext.Provider value={setShow}>{children}</ModalDispatchContext.Provider>
    </ModalStateContext.Provider>
  )
}

function useModalState() {
  const context = React.useContext(ModalStateContext)
  if (context === undefined) {
    throw new Error('useModalState must be used within a ModalProvider')
  }
  return context
}

function useModalDispatch() {
  const context = React.useContext(ModalDispatchContext)
  if (context === undefined) {
    throw new Error('useModalDispatch must be used within a ModalProvider')
  }
  return context
}

function useModal() {
  return { showModal: useModalState(), setShowModal: useModalDispatch() }
}

export { ModalProvider, useModal }
