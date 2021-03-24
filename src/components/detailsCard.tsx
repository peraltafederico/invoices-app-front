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

export const StyledOriginAddress = styled.div`
  margin: 3rem 0;
`

export const StyledInfoContainer = styled.div`
  display: flex;
  flex-direction: column;
`

export const StyledPaymentContainer = styled(StyledInfoContainer)`
  margin-top: ${(props) => props.theme.space[13]};
`

export const InvoiceInfoTitle = styled(Text)`
  margin-bottom: ${(props) => props.theme.space[6]};
`

export const InvoiceMainInfo = styled(Text)`
  font-size: 1.5rem;
  line-height: 1.33;
`

export const StyledDestinationAddress = styled.div`
  margin-top: ${(props) => props.theme.space[4]};
`

export const DetailsCard = (props: Props) => {
  return (
    <Card>
      <InvoiceId id="XM9141" />
      <StyledInvoiceType variant="body2" muted>
        Graphic Design
      </StyledInvoiceType>
      <StyledOriginAddress>
        <Text muted>19 Union Terrace</Text>
        <Text muted>London</Text>
        <Text muted>E1 3EZ</Text>
        <Text muted>United Kingdom</Text>
      </StyledOriginAddress>
      <Grid container gap="4.1rem">
        <Grid span={6}>
          <StyledInfoContainer>
            <InvoiceInfoTitle muted variant="body2">
              Invoice Date
            </InvoiceInfoTitle>
            <InvoiceMainInfo bold>21 Aug 2021</InvoiceMainInfo>
          </StyledInfoContainer>
          <StyledPaymentContainer>
            <InvoiceInfoTitle muted variant="body2">
              Payment Due
            </InvoiceInfoTitle>
            <InvoiceMainInfo bold>20 Sep 2021</InvoiceMainInfo>
          </StyledPaymentContainer>
        </Grid>
        <Grid span={6}>
          <StyledInfoContainer>
            <InvoiceInfoTitle muted variant="body2">
              Bill To
            </InvoiceInfoTitle>
            <InvoiceMainInfo bold>Alex Grim</InvoiceMainInfo>
            <StyledDestinationAddress>
              <Text muted>19 Union Terrace</Text>
              <Text muted>London</Text>
              <Text muted>E1 3EZ</Text>
              <Text muted>United Kingdom</Text>
            </StyledDestinationAddress>
          </StyledInfoContainer>
        </Grid>
      </Grid>
    </Card>
  )
}
