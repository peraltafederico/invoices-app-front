import styled from '@emotion/styled'
import React from 'react'
import useBreakpoints from '../hooks/useBreakpoints'
import Text from './text'

interface Props {
  id: string
}

const StyledId = styled.span`
  color: #858bb2;
`

const InvoiceId: React.FC<Props> = ({ id }: Props) => {
  const { isMobileOnly, isTablet } = useBreakpoints()

  return (
    <>
      {isMobileOnly && (
        <Text variant="body2" isBold>
          <StyledId>#</StyledId>
          {id}
        </Text>
      )}

      {isTablet && (
        <h3>
          <StyledId>#</StyledId>
          {id}
        </h3>
      )}
    </>
  )
}

export default InvoiceId
