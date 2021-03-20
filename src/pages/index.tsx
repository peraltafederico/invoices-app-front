import * as React from 'react'
import { PageProps } from 'gatsby'

import styled from '@emotion/styled'
import InvoiceCard from '../components/invoiceCard'
import Text from '../components/text'
import ArrowDown from '../assets/arrow-down.inline.svg'
import Button from '../components/button'
import PlusIcon from '../assets/plus.inline.svg'

const StyledContainer = styled.div``

const StyledCardsWrapper = styled.div`
  margin-top: ${(props) => `-${props.theme.space[8]}`};

  & > div {
    margin-top: ${(props) => props.theme.space[8]};
  }
`

const StyledActionsContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: ${(props) => props.theme.space[13]};
`

const StyledDetails = styled.div``

const StyledDetailsTitle = styled.h2`
  margin-bottom: ${(props) => props.theme.space[2]};
`

const StyledActions = styled.div`
  display: flex;
  align-items: center;
  margin-right: ${(props) => `-${props.theme.space[12]}`};

  & > * {
    margin-right: ${(props) => props.theme.space[12]};
  }
`

const StyledFilter = styled.div`
  display: flex;
  align-items: center;
`

const StyledFilterTitle = styled(Text)`
  margin-right: ${(props) => props.theme.space[6]};
`

const Home: React.FC<PageProps<{}>> = () => (
  <StyledContainer>
    <StyledActionsContainer>
      <StyledDetails>
        <StyledDetailsTitle>Invoices</StyledDetailsTitle>
        <Text variant="body2" muted>
          7 invoices
        </Text>
      </StyledDetails>
      <StyledActions>
        <StyledFilter role="button" tabIndex={0}>
          <StyledFilterTitle variant="body2" bold>
            Filter
          </StyledFilterTitle>
          <ArrowDown />
        </StyledFilter>
        <Button variant="primary" icon={<PlusIcon />}>
          New
        </Button>
      </StyledActions>
    </StyledActionsContainer>
    <StyledCardsWrapper>
      {[1, 2, 3, 4, 5, 6, 7].map((card) => (
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
  </StyledContainer>
)

export default Home
