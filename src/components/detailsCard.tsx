/* eslint-disable react/jsx-fragments */
/* eslint-disable react/jsx-key */
import { css } from '@emotion/react'
import styled from '@emotion/styled'
import React from 'react'
import { format } from 'date-fns'
import { usePageContext } from '../context/pageContext'
import { Invoice } from '../interfaces'
import {
  MIN_LARGE_DISPLAY_MEDIA_QUERY,
  MIN_TABLET_MEDIA_QUERY,
} from '../theme/base'
import Card from './card'
import Grid from './grid'
import InvoiceId from './invoiceId'
import Text from './text'
import Hidden from './hidden'

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
  border-radius: ${(props) => props.theme.radii[0]};

  ${(props) =>
    props.theme.mode === 'light' &&
    css`
      background-color: ${props.theme.colors.all.grey.ghostWhite};
    `}

  ${(props) =>
    props.theme.mode === 'dark' &&
    css`
      background-color: ${props.theme.colors.all.darkBlue.spaceCadet[200]};
    `}

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
  ${(props) =>
    props.theme.mode === 'light' &&
    css`
      background-color: ${props.theme.colors.primary};
    `}

  ${(props) =>
    props.theme.mode === 'dark' &&
    css`
      background-color: ${props.theme.colors.all.darkBlue.richBlack};
    `}

 
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

  ${MIN_LARGE_DISPLAY_MEDIA_QUERY} {
    padding: ${(props) => props.theme.space[14]};
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

export const DetailsCard: React.FC = () => {
  const {
    pageContext: {
      billFromCity,
      billFromCountry,
      billFromPostCode,
      billFromStreet,
      billToCity,
      billToCountry,
      billToEmail,
      billToName,
      billToPostCode,
      billToStreet,
      bussinessId,
      date,
      description,
      items,
      total,
    },
  } = usePageContext<Invoice>()

  return (
    <StyledCard>
      <StyledHeader>
        <div>
          <Hidden mobileDown>
            <InvoiceId size="big" id={bussinessId} />
          </Hidden>
          <Hidden mobileUp>
            <InvoiceId size="small" id={bussinessId} />
          </Hidden>
          <StyledInvoiceType variant="body2" isMuted>
            {description}
          </StyledInvoiceType>
        </div>
        <StyledOriginAddress>
          <Text isMuted>{billFromStreet}</Text>
          <Text isMuted>{billFromCity}</Text>
          <Text isMuted>{billFromPostCode}</Text>
          <Text isMuted>{billFromCountry}</Text>
        </StyledOriginAddress>
      </StyledHeader>
      <Grid container gap="4.1rem">
        <Grid sm={6} md={3.54}>
          <StyledInfoContainer>
            <InvoiceInfoTitle isMuted variant="body2">
              Invoice Date
            </InvoiceInfoTitle>
            <InvoiceMainInfo isBold>
              {format(new Date(+date), 'dd MMM yyyy')}
            </InvoiceMainInfo>
          </StyledInfoContainer>
          <StyledPaymentContainer>
            <InvoiceInfoTitle isMuted variant="body2">
              Payment Due
            </InvoiceInfoTitle>
            <InvoiceMainInfo isBold>
              {format(new Date(+date), 'dd MMM yyyy')}
            </InvoiceMainInfo>
          </StyledPaymentContainer>
        </Grid>
        <Grid sm={6} md={3.67}>
          <StyledInfoContainer>
            <InvoiceInfoTitle isMuted variant="body2">
              Bill To
            </InvoiceInfoTitle>
            <InvoiceMainInfo isBold>{billToName}</InvoiceMainInfo>
            <StyledDestinationAddress>
              <Text isMuted>{billToStreet}</Text>
              <Text isMuted>{billToCity}</Text>
              <Text isMuted>{billToPostCode}</Text>
              <Text isMuted>{billToCountry}</Text>
            </StyledDestinationAddress>
          </StyledInfoContainer>
        </Grid>
        <Grid sm={12} md={4.79}>
          <StyledSentToContainer>
            <InvoiceInfoTitle isMuted variant="body2">
              Sent to
            </InvoiceInfoTitle>
            <InvoiceMainInfo isBold>{billToEmail}</InvoiceMainInfo>
          </StyledSentToContainer>
        </Grid>
      </Grid>
      <StyledBillContainer>
        <StyledBillDetails>
          <Hidden mobileUp>
            <Grid container rowGap="2.4rem">
              {items.map((item) => (
                <React.Fragment key={item.name}>
                  <Grid sm={6} rowGap="2.4rem">
                    <StyledBillDetailTitle isBold variant="body2">
                      {item.name}
                    </StyledBillDetailTitle>
                    <Text variant="body2" isMuted isBold>
                      {item.qty} x £ {item.price}
                    </Text>
                  </Grid>
                  <Grid sm={6} rowGap="2.4rem">
                    <StyledPriceContainer>
                      <Text variant="body2" isBold>
                        £ {item.total}
                      </Text>
                    </StyledPriceContainer>
                  </Grid>
                </React.Fragment>
              ))}
            </Grid>
          </Hidden>

          <Hidden mobileDown>
            <StyledTable css={{ width: '100%', borderCollapse: 'collapse' }}>
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
                {items.map((item) => (
                  <tr key={item.name}>
                    <StyledTableCell>
                      <Text variant="body2" isBold>
                        {item.name}
                      </Text>
                    </StyledTableCell>
                    <StyledTableCell css={{ textAlign: 'center' }}>
                      <Text variant="body2" isMuted isBold>
                        {item.qty}
                      </Text>
                    </StyledTableCell>
                    <StyledTableCell css={{ textAlign: 'right' }}>
                      <Text variant="body2" isMuted isBold>
                        £ {item.price}
                      </Text>
                    </StyledTableCell>
                    <StyledTableCell css={{ textAlign: 'right' }}>
                      <Text variant="body2" isBold>
                        £ {item.total}
                      </Text>
                    </StyledTableCell>
                  </tr>
                ))}
              </StyledTableBody>
            </StyledTable>
          </Hidden>
        </StyledBillDetails>
        <StyledBillTotal>
          <StyledTotalPriceContainer>
            <Text>
              <Hidden mobileUp>Grand Total</Hidden>
              <Hidden mobileDown>Amount Due</Hidden>
            </Text>
            <StyledGrandTotal>{`£ ${total || 0}`}</StyledGrandTotal>
          </StyledTotalPriceContainer>
        </StyledBillTotal>
      </StyledBillContainer>
    </StyledCard>
  )
}
