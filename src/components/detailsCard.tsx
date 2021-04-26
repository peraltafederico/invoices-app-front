import styled from '@emotion/styled'
import useBreakpoints from '../hooks/useBreakpoints'
import { MIN_TABLET_MEDIA_QUERY } from '../theme/base'
import Card from './card'
import Grid from './grid'
import InvoiceId from './invoiceId'
import Text from './text'

const StyledInvoiceType = styled(Text)`
  margin-top: ${(props) => props.theme.space[2]};
  margin-bottom: 0.1rem;

  ${MIN_TABLET_MEDIA_QUERY} {
    margin-top: ${(props) => props.theme.space[4]};
  }
`

const StyledOriginAddress = styled.div`
  margin: 3rem 0;

  ${MIN_TABLET_MEDIA_QUERY} {
    margin: 0;
    text-align: right;
  }
`

const StyledInfoContainer = styled.div`
  display: flex;
  flex-direction: column;
`

const StyledPaymentContainer = styled(StyledInfoContainer)`
  margin-top: ${(props) => props.theme.space[13]};
`

const StyledSentToContainer = styled(StyledInfoContainer)`
  margin-top: ${(props) => props.theme.space[13]};

  ${MIN_TABLET_MEDIA_QUERY} {
    margin-top: 0;
  }
`

const InvoiceInfoTitle = styled(Text)`
  margin-bottom: ${(props) => props.theme.space[6]};
`

const InvoiceMainInfo = styled(Text)`
  font-size: 1.5rem;
  line-height: 1.33;
`

const StyledDestinationAddress = styled.div`
  margin-top: ${(props) => props.theme.space[4]};
`

const StyledBillContainer = styled.div`
  margin-top: 4rem;
  background-color: ${(props) => props.theme.colors.all.grey.ghostWhite};
  border-radius: ${(props) => props.theme.radii[2]};

  ${MIN_TABLET_MEDIA_QUERY} {
    margin-top: ${(props) => props.theme.space[14]};
  }
`

const StyledBillDetails = styled.div`
  padding: ${(props) => props.theme.space[12]};

  ${MIN_TABLET_MEDIA_QUERY} {
    padding: ${(props) => props.theme.space[13]};
    padding-bottom: ${(props) => props.theme.space[12]};
  }
`

const StyledBillTotal = styled.div`
  background-color: ${(props) => props.theme.colors.primary};
  border-radius: ${(props) => props.theme.radii[3]};
  height: 8rem;
  color: ${(props) => props.theme.colors.all.white};
  display: flex;
  align-items: center;
  padding: ${(props) => props.theme.space[12]};
`

const StyledBillDetailTitle = styled(Text)`
  margin-bottom: ${(props) => props.theme.space[4]};
`

const StyledPriceContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
`

const StyledTotalPriceContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
`

const StyledGrandTotal = styled.h2`
  letter-spacing: -0.042rem;
  line-height: 1.6;

  ${MIN_TABLET_MEDIA_QUERY} {
    font-size: 2.4rem;
    line-height: 1.34;
    letter-spacing: ${(props) => props.theme.letterSpacings[5]};
  }
`

const StyledCard = styled(Card)`
  ${MIN_TABLET_MEDIA_QUERY} {
    padding: ${(props) => props.theme.space[13]};
  }
`

const StyledHeader = styled.div`
  ${MIN_TABLET_MEDIA_QUERY} {
    display: flex;
    justify-content: space-between;
    margin-bottom: 2.1rem;
  }
`

const StyledTableBody = styled.tbody`
  &:before {
    content: '@';
    display: block;
    line-height: ${(props) => props.theme.space[8]};
    text-indent: -99999px;
  }
`

const StyledTableCell = styled.td`
  padding: ${(props) => props.theme.space[8]} 0;
`

const StyledTable = styled.table`
  width: 100%;
`

const StyledTableHead = styled.th`
  width: 100%;
  font-weight: ${(props) => props.theme.fontWeights[0]};
`

export const DetailsCard = () => {
  const { isTablet, isMobileOnly } = useBreakpoints()

  return (
    <StyledCard>
      <StyledHeader>
        <div>
          <InvoiceId id="XM9141" />
          <StyledInvoiceType variant="body2" isMuted>
            Graphic Design
          </StyledInvoiceType>
        </div>
        <StyledOriginAddress>
          <Text isMuted>19 Union Terrace</Text>
          <Text isMuted>London</Text>
          <Text isMuted>E1 3EZ</Text>
          <Text isMuted>United Kingdom</Text>
        </StyledOriginAddress>
      </StyledHeader>
      <Grid container gap="4.1rem">
        <Grid sm={6} md={4}>
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
        <Grid sm={6} md={4}>
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
        <Grid sm={12} md={4}>
          <StyledSentToContainer>
            <InvoiceInfoTitle isMuted variant="body2">
              Sent to
            </InvoiceInfoTitle>
            <InvoiceMainInfo isBold>alexgrim@mail.com</InvoiceMainInfo>
          </StyledSentToContainer>
        </Grid>
      </Grid>
      <StyledBillContainer>
        <StyledBillDetails>
          {isMobileOnly && (
            <Grid container rowGap="2.4rem">
              <Grid sm={6}>
                <StyledBillDetailTitle isBold variant="body2">
                  Banner Design
                </StyledBillDetailTitle>
                <Text variant="body2" isMuted isBold>
                  1 x £ 156.00
                </Text>
              </Grid>
              <Grid sm={6}>
                <StyledPriceContainer>
                  <Text variant="body2" isBold>
                    £ 156.00
                  </Text>
                </StyledPriceContainer>
              </Grid>
              <Grid sm={6}>
                <StyledBillDetailTitle isBold variant="body2">
                  Email Design
                </StyledBillDetailTitle>
                <Text variant="body2" isMuted isBold>
                  2 x £ 200.00
                </Text>
              </Grid>
              <Grid sm={6}>
                <StyledPriceContainer>
                  <Text variant="body2" isBold>
                    £ 400.00
                  </Text>
                </StyledPriceContainer>
              </Grid>
            </Grid>
          )}{' '}
          {isTablet && (
            <StyledTable css={{ width: '100%' }}>
              <thead>
                <tr>
                  <StyledTableHead
                    css={{
                      textAlign: 'left',
                      width: '50.2%',
                    }}
                  >
                    <Text isMuted>Item name</Text>
                  </StyledTableHead>
                  <StyledTableHead css={{ width: '5.2%' }}>
                    <Text isMuted>QTY.</Text>
                  </StyledTableHead>
                  <StyledTableHead
                    css={{
                      textAlign: 'right',
                      width: '21.5%',
                    }}
                  >
                    <Text isMuted>Price</Text>
                  </StyledTableHead>
                  <StyledTableHead
                    css={{
                      textAlign: 'right',
                      width: '23.1%',
                    }}
                  >
                    <Text isMuted>Total</Text>
                  </StyledTableHead>
                </tr>
              </thead>
              <StyledTableBody>
                <tr>
                  <StyledTableCell>
                    <Text variant="body2" isBold>
                      Banner Design
                    </Text>
                  </StyledTableCell>
                  <StyledTableCell css={{ textAlign: 'center' }}>
                    <Text variant="body2" isMuted isBold>
                      1
                    </Text>
                  </StyledTableCell>
                  <StyledTableCell css={{ textAlign: 'right' }}>
                    <Text variant="body2" isMuted isBold>
                      £ 156.00
                    </Text>
                  </StyledTableCell>
                  <StyledTableCell css={{ textAlign: 'right' }}>
                    <Text variant="body2" isBold>
                      £ 156.00
                    </Text>
                  </StyledTableCell>
                </tr>
                <tr>
                  <StyledTableCell>
                    <Text variant="body2" isBold>
                      Email Design
                    </Text>
                  </StyledTableCell>
                  <StyledTableCell css={{ textAlign: 'center' }}>
                    <Text variant="body2" isMuted isBold>
                      2
                    </Text>
                  </StyledTableCell>
                  <StyledTableCell css={{ textAlign: 'right' }}>
                    <Text variant="body2" isMuted isBold>
                      £ 200.00
                    </Text>
                  </StyledTableCell>
                  <StyledTableCell css={{ textAlign: 'right' }}>
                    <Text variant="body2" isBold>
                      £ 400.00
                    </Text>
                  </StyledTableCell>
                </tr>
              </StyledTableBody>
            </StyledTable>
          )}
        </StyledBillDetails>
        <StyledBillTotal>
          <StyledTotalPriceContainer>
            <Text>{isMobileOnly ? 'Grand Total' : 'Amount Due'}</Text>
            <StyledGrandTotal>£ 556.00</StyledGrandTotal>
          </StyledTotalPriceContainer>
        </StyledBillTotal>
      </StyledBillContainer>
    </StyledCard>
  )
}
