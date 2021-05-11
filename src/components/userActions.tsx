import React from 'react'

import styled from '@emotion/styled'
import { navigate } from 'gatsby'
import Text from './text'
import ArrowDown from '../assets/arrow-down.inline.svg'
import Button from './button'
import PlusIcon from '../assets/plus.inline.svg'
import useMediaQuery from '../hooks/useMediaQuery'
import {
  MIN_TABLET,
  MOBILE_ONLY,
  MIN_TABLET_MEDIA_QUERY,
  MIN_LARGE_DISPLAY_MEDIA_QUERY,
} from '../theme/base'
import { useModalContext } from '../context/modalContext'
import InvoiceDrawer from './invoiceDrawer'

interface Props {
  invoicesAmount: number
}

const StyledActionsContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 0 auto;
  margin-bottom: ${(props) => props.theme.space[13]};
  max-width: ${(props) => props.theme.sizes[0]};

  ${MIN_TABLET_MEDIA_QUERY} {
    margin-bottom: 5.6rem;
  }

  ${MIN_LARGE_DISPLAY_MEDIA_QUERY} {
    margin-bottom: 6.5rem;
  }
`

const StyledDetails = styled.div`
  h2 {
    margin-bottom: ${(props) => props.theme.space[2]};
  }
  h1 {
    margin-bottom: ${(props) => props.theme.space[4]};
  }
`

const StyledActions = styled.div`
  display: flex;
  align-items: center;
  margin-right: ${(props) => `-${props.theme.space[12]}`};
  ${MIN_TABLET_MEDIA_QUERY} {
    margin-right: -4rem;
  }

  & > * {
    margin-right: ${(props) => props.theme.space[12]};

    ${MIN_TABLET_MEDIA_QUERY} {
      margin-right: 4rem;
    }
  }
`

const StyledFilter = styled.div`
  display: flex;
  align-items: center;
`

const StyledFilterTitle = styled(Text)`
  margin-right: ${(props) => props.theme.space[6]};

  ${MIN_TABLET_MEDIA_QUERY} {
    margin-right: ${(props) => props.theme.space[8]};
  }
`

const UserActions: React.FC<Props> = ({ invoicesAmount }: Props) => {
  const isTablet = useMediaQuery(MIN_TABLET)
  const isMobileOnly = useMediaQuery(MOBILE_ONLY)
  const { showModal } = useModalContext()

  const tabletInvoicesText =
    isTablet && `There are ${invoicesAmount} total invoices`
  const mobileInvoicesText = isMobileOnly && `${invoicesAmount} invoices`

  const handleNewInvoice = () => {
    if (isMobileOnly) {
      navigate('/create')

      return
    }

    showModal({
      component: InvoiceDrawer,
      props: {
        mode: 'create',
      },
    })
  }

  return (
    <StyledActionsContainer>
      <StyledDetails>
        {isMobileOnly && <h2>Invoices</h2>}
        {isTablet && <h1>Invoices</h1>}
        <Text variant="body2" isMuted>
          {invoicesAmount > 0
            ? mobileInvoicesText || tabletInvoicesText
            : 'No Invoices'}
        </Text>
      </StyledDetails>
      <StyledActions>
        <StyledFilter role="button" tabIndex={0}>
          <StyledFilterTitle variant="body2" isBold>
            Filter {isTablet && 'by status'}
          </StyledFilterTitle>
          <ArrowDown />
        </StyledFilter>
        <Button
          variant="primary"
          icon={<PlusIcon />}
          onClick={handleNewInvoice}
        >
          New {isTablet && 'Invoice'}
        </Button>
      </StyledActions>
    </StyledActionsContainer>
  )
}

export default UserActions
