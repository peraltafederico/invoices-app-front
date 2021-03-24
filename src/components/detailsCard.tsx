import styled from '@emotion/styled'
import React from 'react'
import Card from './card'
import Grid from './grid'
import InvoiceId from './invoiceId'
import Text from './text'

interface Props {}

export const StyledInvoiceType = styled(Text)`
  margin-top: ${(props) => props.theme.space[2]};
  margin-bottom: 0.1rem;
`

export const StyledAddressContainer = styled.div`
  margin: 3rem 0;
`

export const DetailsCard = (props: Props) => {
  return (
    <Card>
      <InvoiceId id="XM9141" />
      <StyledInvoiceType variant="body2" muted>
        Graphic Design
      </StyledInvoiceType>
      <StyledAddressContainer>
        <Text muted>19 Union Terrace</Text>
        <Text muted>London</Text>
        <Text muted>E1 3EZ</Text>
        <Text muted>United Kingdom</Text>
      </StyledAddressContainer>
    </Card>
  )
}
