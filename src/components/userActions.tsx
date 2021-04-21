import React from 'react'

import styled from '@emotion/styled'
import { Link } from 'gatsby'
import Text from './text'
import ArrowDown from '../assets/arrow-down.inline.svg'
import Button from './button'
import PlusIcon from '../assets/plus.inline.svg'

interface Props {
  invoicesAmount: number
}

const StyledActionsContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: ${(props) => props.theme.space[13]};
`

const StyledDetails = styled.div``

const StyledDetailsTitle = styled.h2`
  margin-bottom: ${(props) => props.theme.space[2]};
`

const StyledActions = styled.div`
  display: flex;
  align-items: center;
  margin-right: ${(props) => `-${props.theme.space[12]}`};

  & > * {
    margin-right: ${(props) => props.theme.space[12]};
  }
`

const StyledFilter = styled.div`
  display: flex;
  align-items: center;
`

const StyledFilterTitle = styled(Text)`
  margin-right: ${(props) => props.theme.space[6]};
`

const UserActions: React.FC<Props> = ({ invoicesAmount }: Props) => (
  <StyledActionsContainer>
    <StyledDetails>
      <StyledDetailsTitle>Invoices</StyledDetailsTitle>
      <Text variant="body2" isMuted>
        {invoicesAmount > 0 ? `${invoicesAmount} invoices` : 'No invoices'}
      </Text>
    </StyledDetails>
    <StyledActions>
      <StyledFilter role="button" tabIndex={0}>
        <StyledFilterTitle variant="body2" isBold>
          Filter
        </StyledFilterTitle>
        <ArrowDown />
      </StyledFilter>
      <Link to="/create">
        <Button variant="primary" icon={<PlusIcon />}>
          New
        </Button>
      </Link>
    </StyledActions>
  </StyledActionsContainer>
)

export default UserActions
