import { createContext, useCallback, useContext, useState } from 'react'

interface Modal {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  component: React.JSXElementConstructor<any> | null
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  props: any
}

interface ModalContextData {
  showModal: (modal: Modal) => void
  hideModal: () => void
  modal: Modal
}

const INITIAL_STATE = {
  component: null,
  props: {},
}

export const ModalContext = createContext<ModalContextData | undefined>(
  undefined
)

export const useModalContextValue = (): ModalContextData => {
  const [modal, setModal] = useState<Modal>(INITIAL_STATE)

  const showModal = useCallback((newModal: Modal) => setModal(newModal), [])

  const hideModal = useCallback(() => setModal(INITIAL_STATE), [])

  return {
    modal,
    hideModal,
    showModal,
  }
}

export const useModalContext = (): ModalContextData => {
  const modalContext = useContext(ModalContext)

  if (!modalContext) {
    // eslint-disable-next-line no-console
    throw new Error(
      'You should use useModalContext insie ModalContext provider'
    )
  }

  return modalContext
}
