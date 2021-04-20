import styled from '@emotion/styled'
import React from 'react'
import Text from './text'

interface Props {
  id: string
}

const StyledId = styled.span`
  color: #858bb2;
`

const InvoiceId: React.FC<Props> = ({ id }: Props) => {
  return (
    <Text variant="body2" isBold>
      <StyledId>#</StyledId>
      {id}
    </Text>
  )
}

export default InvoiceId
