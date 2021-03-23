import * as React from 'react'
import { PageProps } from 'gatsby'

import styled from '@emotion/styled'
import InvoiceCard from '../components/invoiceCard'
import UserActions from '../components/userActions'
import NoContent from '../components/noContent'

const StyledContainer = styled.div``

const StyledCardsWrapper = styled.div`
  & > div:not(:first-child) {
    margin-top: ${(props) => props.theme.space[8]};
  }
`

const invoices = []

const Home: React.FC<PageProps> = () => (
  <StyledContainer>
    <UserActions invoicesAmount={7} />
    {invoices.length > 0 ? (
      <StyledCardsWrapper>
        {invoices.map((card) => (
          <InvoiceCard
            key={card}
            date="Due 19 Aug 2021"
            id="RT3080"
            money="£ 1,800.90"
            name="Jensen Huang"
            status="paid"
          />
        ))}
      </StyledCardsWrapper>
    ) : (
      <NoContent />
    )}
  </StyledContainer>
)

export default Home
