/* eslint-disable react/jsx-fragments */
import styled from '@emotion/styled'
import React from 'react'
import { InvoiceStatus } from '../interfaces'
import { MIN_TABLET_MEDIA_QUERY } from '../theme/base'
import Button from './button'
import Card from './card'
import Hidden from './hidden'
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
  return (
    <React.Fragment>
      <Hidden mobileUp>
        <StyledCard>
          <Text variant="body2" isMuted>
            Status
          </Text>
          <Status type={status} />
        </StyledCard>
      </Hidden>
      <Hidden mobileDown>
        <StyledCard>
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
        </StyledCard>
      </Hidden>
    </React.Fragment>
  )
}

export default StatusCard
