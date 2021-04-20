import ReactModal from 'react-modal'
import { useModalContext } from '../context/modalContext'

type Props = {
  children: React.ReactNode
} & Omit<ReactModal.Props, 'isOpen'>

const BaseModal: React.FC<Props> = ({ children, ...props }: Props) => {
  const { hideModal } = useModalContext()

  return (
    <ReactModal
      {...props}
      isOpen
      ariaHideApp={false}
      onRequestClose={hideModal}
    >
      {children}
    </ReactModal>
  )
}

export default BaseModal
