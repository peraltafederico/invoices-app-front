import styled from '@emotion/styled'
import React from 'react'
import Text from './text'

const StyledId = styled.span`
  color: #858bb2;
`
interface Props {
  id: string
  size: 'small' | 'big'
}

const InvoiceId: React.FC<Props> = ({ id, size }: Props) => {
  return (
    <>
      {size === 'small' && (
        <Text variant="body2" isBold>
          <StyledId>#</StyledId>
          {id}
        </Text>
      )}

      {size === 'big' && (
        <h3>
          <StyledId>#</StyledId>
          {id}
        </h3>
      )}
    </>
  )
}

export default InvoiceId
