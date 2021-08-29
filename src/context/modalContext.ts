import { createContext, useCallback, useContext, useState } from 'react'

// eslint-disable-next-line @typescript-eslint/no-explicit-any
interface Modal<T = any> {
  component: React.JSXElementConstructor<T> | null
  props?: React.ComponentProps<React.JSXElementConstructor<T>>
  show?: boolean
}

interface ModalContextData {
  showModal: <T = JSX.Element>(modal: Modal<T>) => void
  hideModal: () => void
  modal: Modal
}

const INITIAL_STATE = {
  component: null,
  props: {},
  show: false,
}

export const ModalContext = createContext<ModalContextData | undefined>(
  undefined
)

export const useModalContextValue = (): ModalContextData => {
  const [modal, setModal] = useState<Modal>(INITIAL_STATE)

  const showModal = useCallback((newModal: Modal) => {
    setModal({ ...newModal, show: true })
  }, [])

  const hideModal = useCallback(() => {
    setModal({ ...modal, show: false })
  }, [modal])

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
