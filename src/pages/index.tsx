import * as React from 'react'
import { PageProps } from 'gatsby'

import styled from '@emotion/styled'
import InvoiceCard from '../components/invoiceCard'
import UserActions from '../components/userActions'
import NoContent from '../components/noContent'
import {
  MIN_LARGE_DISPLAY_MEDIA_QUERY,
  MIN_TABLET_MEDIA_QUERY,
} from '../theme/base'
import Layout from '../components/layout'

const StyledCardsWrapper = styled.div`
  & > div:not(:first-of-type) {
    margin-top: ${(props) => props.theme.space[8]};

    ${MIN_TABLET_MEDIA_QUERY} {
      margin-top: ${(props) => props.theme.space[6]};
    }

    ${MIN_LARGE_DISPLAY_MEDIA_QUERY} {
      margin-top: ${(props) => props.theme.space[8]};
    }
  }
`

const invoices = [1, 2, 3, 4, 5, 6, 7]
// const invoices = [] as any

const Home: React.FC<PageProps> = () => (
  <Layout>
    <div>
      <UserActions invoicesAmount={invoices.length} />
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
    </div>
  </Layout>
)

export default Home
