import * as React from 'react'
import { PageProps } from 'gatsby'

import styled from '@emotion/styled'
import InvoiceCard from '../components/invoiceCard'

const StyledContainer = styled.div``

const Home: React.FC<PageProps<{}>> = () => (
  <StyledContainer>
    <InvoiceCard
      date="Due 19 Aug 2021"
      id="RT3080"
      money="£ 1,800.90"
      name="Jensen Huang"
      status="paid"
    />
  </StyledContainer>
)

export default Home
