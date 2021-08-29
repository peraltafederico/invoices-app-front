import * as React from 'react'
import { graphql, PageProps, useStaticQuery } from 'gatsby'

import styled from '@emotion/styled'
import InvoiceCard from '../components/invoiceCard'
import UserActions from '../components/userActions'
import NoContent from '../components/noContent'
import {
  MIN_LARGE_DISPLAY_MEDIA_QUERY,
  MIN_TABLET_MEDIA_QUERY,
} from '../theme/base'
import Layout from '../components/layout'
import { Invoice } from '../interfaces'

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

const Home: React.FC<PageProps> = () => {
  const {
    invoicesAPI: { invoices },
  } = useStaticQuery(graphql`
    query MyQuery {
      invoicesAPI {
        invoices {
          bussinessId
          date
          billToName
          status
        }
      }
    }
  `)

  return (
    <Layout>
      <div>
        <UserActions invoicesAmount={invoices.length} />
        {invoices.length > 0 ? (
          <StyledCardsWrapper>
            {invoices.map((invoice: Invoice) => (
              <InvoiceCard
                key={invoice.bussinessId}
                date={invoice.date}
                id={invoice.bussinessId}
                money="£ 1,800.90"
                name={invoice.billToName}
                status={invoice.status}
              />
            ))}
          </StyledCardsWrapper>
        ) : (
          <NoContent />
        )}
      </div>
    </Layout>
  )
}

export default Home
