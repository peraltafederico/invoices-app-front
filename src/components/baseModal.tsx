import ReactModal from 'react-modal'
import styled from '@emotion/styled'
import { useTheme } from '@emotion/react'
import { useModalContext } from '../context/modalContext'
import Button from './button'

const StyledContent = styled.div`
  margin: ${(props) => `${props.theme.space[4]} 0 ${props.theme.space[12]} 0`};
`

const StyledFooter = styled.div`
  display: flex;
  justify-content: flex-end;

  button:not(:first-of-type) {
    margin-left: ${(props) => `${props.theme.space[4]}`};
  }
`

const StyledContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  flex: 1;
`

type Props = {
  children: React.ReactNode
  title: string
} & Omit<ReactModal.Props, 'isOpen'>

const BaseModal: React.FC<Props> = ({ children, title, ...props }: Props) => {
  const theme = useTheme()
  const { hideModal } = useModalContext()

  return (
    <ReactModal
      isOpen
      ariaHideApp={false}
      onRequestClose={hideModal}
      style={{
        content: {
          top: '50%',
          left: '50%',
          right: 'auto',
          bottom: 'auto',
          transform: 'translate(-50%, -50%)',
          padding: theme.space[13],
          minWidth: '32.7rem',
          height: '22rem',
          display: 'flex',
          flexDirection: 'column',
          boxShadow: theme.shadows[0],
          borderRadius: theme.radii[0],
        },
        overlay: {
          backgroundColor: 'rgba(0,0,0,0.5)',
        },
      }}
      {...props}
    >
      <StyledContainer>
        <h2>{title}</h2>
        <StyledContent>{children}</StyledContent>
        <StyledFooter>
          <Button variant="secondary">Cancel</Button>
          <Button variant="danger">Delete</Button>
        </StyledFooter>
      </StyledContainer>
    </ReactModal>
  )
}

export default BaseModal
