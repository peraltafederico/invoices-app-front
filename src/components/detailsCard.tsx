import styled from '@emotion/styled'
import ActionsFooter from './actionsFooter'
import Card from './card'
import Grid from './grid'
import InvoiceId from './invoiceId'
import Text from './text'

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

export const StyledDestinationContainer = styled.div`
  margin-top: ${(props) => props.theme.space[13]};
`

export const StyledBillContainer = styled.div`
  margin-top: 4rem;
  background-color: ${(props) => props.theme.colors.all.grey.ghostWhite};
  border-radius: ${(props) => props.theme.radii[2]};
`

export const StyledBillDetails = styled.div`
  padding: ${(props) => props.theme.space[12]};
`

export const StyledBillTotal = styled.div`
  background-color: ${(props) => props.theme.colors.primary};
  border-radius: ${(props) => props.theme.radii[3]};
  height: 8rem;
  color: ${(props) => props.theme.colors.all.white};
  display: flex;
  align-items: center;
  padding: ${(props) => props.theme.space[12]};
`

export const StyledBillDetailTitle = styled(Text)`
  margin-bottom: ${(props) => props.theme.space[4]};
`

export const StyledPriceContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
`

export const StyledTotalPriceContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
`

export const StyledGrandTotal = styled.h2`
  letter-spacing: -0.042rem;
  line-height: 1.6;
`

export const DetailsCard = () => {
  return (
    <Card>
      <InvoiceId id="XM9141" />
      <StyledInvoiceType variant="body2" isMuted>
        Graphic Design
      </StyledInvoiceType>
      <StyledOriginAddress>
        <Text isMuted>19 Union Terrace</Text>
        <Text isMuted>London</Text>
        <Text isMuted>E1 3EZ</Text>
        <Text isMuted>United Kingdom</Text>
      </StyledOriginAddress>
      <Grid container gap="4.1rem">
        <Grid span={6}>
          <StyledInfoContainer>
            <InvoiceInfoTitle isMuted variant="body2">
              Invoice Date
            </InvoiceInfoTitle>
            <InvoiceMainInfo isBold>21 Aug 2021</InvoiceMainInfo>
          </StyledInfoContainer>
          <StyledPaymentContainer>
            <InvoiceInfoTitle isMuted variant="body2">
              Payment Due
            </InvoiceInfoTitle>
            <InvoiceMainInfo isBold>20 Sep 2021</InvoiceMainInfo>
          </StyledPaymentContainer>
        </Grid>
        <Grid span={6}>
          <StyledInfoContainer>
            <InvoiceInfoTitle isMuted variant="body2">
              Bill To
            </InvoiceInfoTitle>
            <InvoiceMainInfo isBold>Alex Grim</InvoiceMainInfo>
            <StyledDestinationAddress>
              <Text isMuted>19 Union Terrace</Text>
              <Text isMuted>London</Text>
              <Text isMuted>E1 3EZ</Text>
              <Text isMuted>United Kingdom</Text>
            </StyledDestinationAddress>
          </StyledInfoContainer>
        </Grid>
        <Grid span={12}>
          <StyledPaymentContainer>
            <InvoiceInfoTitle isMuted variant="body2">
              Sent to
            </InvoiceInfoTitle>
            <InvoiceMainInfo isBold>alexgrim@mail.com</InvoiceMainInfo>
          </StyledPaymentContainer>
        </Grid>
      </Grid>
      <StyledBillContainer>
        <StyledBillDetails>
          <Grid container rowGap="2.4rem">
            <Grid span={6}>
              <StyledBillDetailTitle isBold variant="body2">
                Banner Design
              </StyledBillDetailTitle>
              <Text variant="body2" isMuted isBold>
                1 x £ 156.00
              </Text>
            </Grid>
            <Grid span={6}>
              <StyledPriceContainer>
                <Text variant="body2" isBold>
                  £ 156.00
                </Text>
              </StyledPriceContainer>
            </Grid>
            <Grid span={6}>
              <StyledBillDetailTitle isBold variant="body2">
                Email Design
              </StyledBillDetailTitle>
              <Text variant="body2" isMuted isBold>
                2 x £ 200.00
              </Text>
            </Grid>
            <Grid span={6}>
              <StyledPriceContainer>
                <Text variant="body2" isBold>
                  £ 400.00
                </Text>
              </StyledPriceContainer>
            </Grid>
          </Grid>
        </StyledBillDetails>
        <StyledBillTotal>
          <StyledTotalPriceContainer>
            <Text>Grand Total</Text>
            <StyledGrandTotal>£ 556.00</StyledGrandTotal>
          </StyledTotalPriceContainer>
        </StyledBillTotal>
      </StyledBillContainer>
      <ActionsFooter
        actions={[
          { buttonVariant: 'secondary', text: 'Edit' },
          { buttonVariant: 'danger', text: 'Delete' },
          { buttonVariant: 'primary', text: 'Mark as Paid' },
        ]}
      />
    </Card>
  )
}
