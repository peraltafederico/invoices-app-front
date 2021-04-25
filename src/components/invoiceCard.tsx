/* eslint-disable react/jsx-fragments */
import styled from '@emotion/styled'
import { Link } from 'gatsby'
import React from 'react'
import useMediaQuery from '../hooks/useMedia'
import { InvoiceStatus } from '../interfaces'
import { MIN_TABLET, MOBILE_ONLY } from '../theme/base'
import Card from './card'
import Grid from './grid'
import InvoiceId from './invoiceId'
import Status from './status'
import Text from './text'
import ArrowDown from '../assets/arrow-down.inline.svg'

interface Props {
  id: string
  name: string
  date: string
  money: string
  status: InvoiceStatus
}

const StyledContent = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: ${(props) => `-${props.theme.space[12]}`};
`

const StyledRow = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: ${(props) => props.theme.space[12]};
  align-items: center;
  position: relative;
`

const StyledPaymentContainer = styled.div``

const StyledPrice = styled.h3`
  margin-top: ${(props) => props.theme.space[4]};
`

const StyledGridContainer = styled(Grid)`
  flex: 1;
  align-items: center;
`

const StyledArrow = styled(ArrowDown)`
  position: absolute;
  right: -8px;
  top: 50%;
  transform: translateY(-50%) rotate(-90deg);
`

const StyledStatus = styled(Status)`
  margin-left: 1.3rem;
`

const StyledWrapper = styled.div`
  max-width: ${(props) => props.theme.sizes[0]};
  margin: 0 auto;
`

const InvoiceCard = ({ id, name, date, money, status }: Props) => {
  const isTablet = useMediaQuery(MIN_TABLET)
  const isMobileOnly = useMediaQuery(MOBILE_ONLY)

  return (
    <StyledWrapper role="button" tabIndex={0}>
      <Link to="/detail">
        <Card>
          <StyledContent>
            {isMobileOnly && (
              <React.Fragment>
                <StyledRow>
                  <InvoiceId id={id} />
                  <Text variant="body2" isMuted>
                    {name}
                  </Text>
                </StyledRow>
                <StyledRow>
                  <StyledPaymentContainer>
                    <Text variant="body2" isMuted>
                      {date}
                    </Text>
                    <StyledPrice>{money}</StyledPrice>
                  </StyledPaymentContainer>
                  <Status type={status} />
                </StyledRow>
              </React.Fragment>
            )}
            {isTablet && (
              <StyledRow>
                <StyledGridContainer container gap="2.7rem">
                  <Grid column={1.65}>
                    <InvoiceId id={id} />
                  </Grid>
                  <Grid column={2.65}>
                    <Text variant="body2" isMuted>
                      {date}
                    </Text>
                  </Grid>
                  <Grid column={2.2}>
                    <Text variant="body2" isMuted>
                      {name}
                    </Text>
                  </Grid>
                  <Grid
                    column={2.4}
                    css={{ display: 'flex', justifyContent: 'flex-end' }}
                  >
                    <StyledPrice>{money}</StyledPrice>
                  </Grid>
                  <Grid column={3.1}>
                    <StyledStatus type="pending" />
                  </Grid>
                </StyledGridContainer>
                <StyledArrow />
              </StyledRow>
            )}
          </StyledContent>
        </Card>
      </Link>
    </StyledWrapper>
  )
}

export default InvoiceCard
