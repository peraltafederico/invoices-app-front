import * as React from 'react'
import { graphql, PageProps, useStaticQuery } from 'gatsby'

import styled from '@emotion/styled'
import { useState } from 'react'
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
  const [filters, setFilters] = useState<string[]>([])

  const handleChangeFilters = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, checked } = e.target
    const newFilters = checked
      ? [...filters, name]
      : filters.filter((filter) => filter !== name)
    setFilters(newFilters)
  }

  return (
    <Layout>
      <div>
        <UserActions
          invoicesAmount={invoices.length}
          onChangeFilters={handleChangeFilters}
          filters={filters}
        />
        {invoices.length > 0 ? (
          <StyledCardsWrapper>
            {invoices
              .filter((invoice: Invoice) =>
                filters.length > 0
                  ? filters.includes(invoice.status || '')
                  : true
              )
              .map((invoice: Invoice) => (
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
