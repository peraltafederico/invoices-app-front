import React, { useRef, useState } from 'react'

import styled from '@emotion/styled'
import { navigate } from 'gatsby'
import ClickAwayListener from 'react-click-away-listener'
import { css } from '@emotion/react'
import { CSSTransition } from 'react-transition-group'
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
import Checkbox from './checkbox'

interface Props {
  invoicesAmount: number
  onChangeFilters: (e: React.ChangeEvent<HTMLInputElement>) => void
  filters: string[]
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
  z-index: 1;

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
  position: relative;
`

const StyledFilterButton = styled.button`
  cursor: pointer;
  background: none;
`

const StyledFilterTitle = styled(Text)`
  margin-right: ${(props) => props.theme.space[6]};

  ${MIN_TABLET_MEDIA_QUERY} {
    margin-right: ${(props) => props.theme.space[8]};
  }
`

const FilterBasePosition = css`
  position: absolute;
  top: 38px;
  right: 50%;
  transform: translateX(50%);
`

const StyledFilterContainer = styled.div`
  .filters-enter {
    ${FilterBasePosition}
    opacity: 0;
  }

  .filters-enter-active {
    opacity: 1;
    transition: opacity 200ms;
  }

  .filters-enter-done {
    ${FilterBasePosition}
    opacity: 1;
  }

  .filters-exit {
    ${FilterBasePosition}
    opacity: 1;
  }

  .filters-exit-active {
    opacity: 0;
    transition: opacity 1000ms;
  }
`

const StyledFilterBox = styled.div`
  width: 192px;
  height: 128px;
  border-radius: 8px;
  padding: 2.4rem;
  cursor: default;
  box-sizing: border-box;

  ${(props) =>
    props.theme.mode === 'light' &&
    css`
      background: ${props.theme.colors.all.white};
      box-shadow: 0px 10px 20px rgba(72, 84, 159, 0.25);
    `}

  ${(props) =>
    props.theme.mode === 'dark' &&
    css`
      background: ${props.theme.colors.all.darkBlue.spaceCadet[200]};
      box-shadow: 0px 10px 20px rgba(0, 0, 0, 0.25);
    `}

  & > div:not(:last-child) {
    margin-bottom: 16px;
  }
`

const StyledArrowDown = styled(ArrowDown)<{ invert: number }>`
  transition: all 0.1s ease;
  transform: ${(props) => (props.invert ? 'rotate(180deg)' : 'rotate(0deg)')};
`

const UserActions: React.FC<Props> = ({
  invoicesAmount,
  onChangeFilters,
  filters,
}: Props) => {
  const isTablet = useMediaQuery(MIN_TABLET)
  const isMobileOnly = useMediaQuery(MOBILE_ONLY)
  const { showModal } = useModalContext()
  const [openFilters, setOpenFilters] = useState(false)
  const filterButtonRef = useRef<HTMLButtonElement>(null)

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

  const handleClickFilters = () => {
    setOpenFilters(!openFilters)
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
        <StyledFilterContainer>
          <StyledFilter>
            <StyledFilterButton
              ref={filterButtonRef}
              onClick={handleClickFilters}
            >
              <StyledFilterTitle variant="body2" isBold as="span">
                Filter {isTablet && 'by status'}
              </StyledFilterTitle>
              <StyledArrowDown invert={openFilters ? 1 : 0} />
            </StyledFilterButton>
            <CSSTransition
              classNames="filters"
              in={openFilters}
              unmountOnExit
              mountOnEnter
              timeout={200}
            >
              <ClickAwayListener
                onClickAway={(e) => {
                  if (!filterButtonRef.current?.contains(e.target as Node)) {
                    handleClickFilters()
                  }
                }}
              >
                <StyledFilterBox>
                  <Checkbox
                    label="Draft"
                    name="draft"
                    onChange={onChangeFilters}
                    checked={filters.includes('draft')}
                  />
                  <Checkbox
                    label="Pending"
                    name="pending"
                    onChange={onChangeFilters}
                    checked={filters.includes('pending')}
                  />
                  <Checkbox
                    label="Paid"
                    name="paid"
                    onChange={onChangeFilters}
                    checked={filters.includes('paid')}
                  />
                </StyledFilterBox>
              </ClickAwayListener>
            </CSSTransition>
          </StyledFilter>
        </StyledFilterContainer>
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
