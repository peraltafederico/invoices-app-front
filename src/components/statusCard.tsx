import styled from '@emotion/styled'
import React from 'react'
import Card from './card'
import Status from './status'
import Text from './text'

interface Props {
  status: string
}

export const StyledCard = styled(Card)`
  padding-bottom: 2.7rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: ${(props) => props.theme.space[8]};
`

const StatusCard: React.FC<Props> = ({ status }: Props) => {
  return (
    <StyledCard>
      <Text variant="body2" muted>
        Status
      </Text>
      <Status type="pending" />
    </StyledCard>
  )
}

export default StatusCard
