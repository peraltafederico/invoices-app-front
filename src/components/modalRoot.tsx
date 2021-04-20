import { useModalContext } from '../context/modalContext'

const ModalRoot = () => {
  const { modal } = useModalContext()

  const { component: Component, props } = modal

  if (Component) {
    return <Component {...props} />
  }

  return null
}

export default ModalRoot
