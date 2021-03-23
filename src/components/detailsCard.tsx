import styled from '@emotion/styled'
import React from 'react'
import Card from './card'
import InvoiceId from './invoiceId'
import Text from './text'

interface Props {}

export const StyledType = styled(Text)`
  margin-top: ${(props) => props.theme.space[2]};
`

export const DetailsCard = (props: Props) => {
  return (
    <Card>
      <InvoiceId id="XM9141" />
      <StyledType variant="body2" muted>
        Graphic Design
      </StyledType>
    </Card>
  )
}
