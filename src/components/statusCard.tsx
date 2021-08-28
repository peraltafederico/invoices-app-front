/* eslint-disable react/jsx-fragments */
import styled from '@emotion/styled'
import React from 'react'
import useBreakpoints from '../hooks/useBreakpoints'
import { InvoiceStatus } from '../interfaces'
import { MIN_TABLET_MEDIA_QUERY } from '../theme/base'
import Button from './button'
import Card from './card'
import Status from './status'
import Text from './text'

export const StyledCard = styled(Card)`
  padding-bottom: 2.7rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: ${(props) => props.theme.space[8]};

  ${MIN_TABLET_MEDIA_QUERY} {
    padding-top: 2rem;
    padding-bottom: 2rem;
    margin-bottom: ${(props) => props.theme.space[12]};
  }
`

const StyledStatus = styled(Status)`
  margin-left: ${(props) => props.theme.space[8]};
`

const StyledActions = styled.div`
  button:not(:last-child) {
    margin-right: ${(props) => props.theme.space[4]};
  }
`

interface Props {
  onDelete: () => void
  onEdit: () => void
  status: InvoiceStatus
  onMarkAsPaid: () => void
}

const StatusCard: React.FC<Props> = ({
  onDelete,
  onEdit,
  onMarkAsPaid,
  status,
}) => {
  const { isTablet, isMobileOnly } = useBreakpoints()

  return (
    <StyledCard>
      {isMobileOnly && (
        <React.Fragment>
          <Text variant="body2" isMuted>
            Status
          </Text>
          <Status type={status} />
        </React.Fragment>
      )}
      {isTablet && (
        <React.Fragment>
          <div css={{ display: 'flex', alignItems: 'center' }}>
            <Text variant="body2" isMuted>
              Status
            </Text>
            <StyledStatus type={status} />
          </div>
          <StyledActions>
            <Button variant="secondary" onClick={onEdit}>
              Edit
            </Button>
            <Button variant="danger" onClick={onDelete}>
              Delete
            </Button>
            <Button onClick={onMarkAsPaid} disabled={status === 'paid'}>
              Mark as Paid
            </Button>
          </StyledActions>
        </React.Fragment>
      )}
    </StyledCard>
  )
}

export default StatusCard
