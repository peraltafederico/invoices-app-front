import ReactModal from 'react-modal'
import styled from '@emotion/styled'
import { useTheme } from '@emotion/react'
import { useMemo } from 'react'
import { useModalContext } from '../context/modalContext'
import Button from './button'
import useBreakpoints from '../hooks/useBreakpoints'
import { MIN_TABLET_MEDIA_QUERY } from '../theme/base'

const StyledContent = styled.div`
  margin: ${(props) => `${props.theme.space[4]} 0 ${props.theme.space[12]} 0`};

  ${MIN_TABLET_MEDIA_QUERY} {
    margin: ${(props) => `1.3rem 0 ${props.theme.space[8]} 0`};
  }
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

const StyledTitle = styled.h2`
  ${MIN_TABLET_MEDIA_QUERY} {
    font-size: 2.4rem;
    line-height: 1.35;
  }
`

type Props = {
  children: React.ReactNode
  title: string
  onAccept: () => void
} & Omit<ReactModal.Props, 'isOpen'>

const BaseModal: React.FC<Props> = ({
  children,
  title,
  onAccept,
  ...props
}: Props) => {
  const theme = useTheme()
  const { hideModal, modal } = useModalContext()
  const { isTablet, isMobileOnly } = useBreakpoints()

  const specificStyles: React.CSSProperties = useMemo(() => {
    let styles: React.CSSProperties = {}

    if (theme.mode === 'light') {
      styles = {
        background: theme.colors.background,
      }
    }

    if (theme.mode === 'dark') {
      styles = {
        background: theme.colors.primary,
      }
    }

    if (isTablet) {
      styles = {
        ...styles,
        padding: theme.space[14],
        minWidth: '48rem',
        minHeight: '24.9rem',
      }
    }

    if (isMobileOnly) {
      styles = {
        ...styles,
        minWidth: '32.7rem',
        minHeight: '22rem',
        padding: theme.space[13],
      }
    }

    return styles
  }, [isTablet, isMobileOnly, theme])

  return (
    <ReactModal
      isOpen={!!modal.show}
      closeTimeoutMS={500}
      appElement={document.getElementById('___gatsby') as HTMLElement}
      onRequestClose={hideModal}
      style={{
        content: {
          top: '50%',
          left: '50%',
          right: 'auto',
          bottom: 'auto',
          transform: 'translate(-50%, -50%)',
          display: 'flex',
          flexDirection: 'column',
          borderRadius: theme.radii[0],
          border: 'none',
          boxShadow: theme.shadows[0],
          ...specificStyles,
        },
        overlay: {
          backgroundColor: 'rgba(0,0,0,0.5)',
        },
      }}
      {...props}
    >
      <StyledContainer>
        <StyledTitle>{title}</StyledTitle>
        <StyledContent>{children}</StyledContent>
        <StyledFooter>
          <Button variant="secondary" onClick={hideModal}>
            Cancel
          </Button>
          <Button variant="danger" onClick={onAccept}>
            Delete
          </Button>
        </StyledFooter>
      </StyledContainer>
    </ReactModal>
  )
}

export default BaseModal
