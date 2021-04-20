import styled from '@emotion/styled'
import { InvoiceStatus } from '../interfaces'
import Card from './card'
import InvoiceId from './invoiceId'
import Status from './status'
import Text from './text'

interface Props {
  id: string
  name: string
  date: string
  money: string
  status: InvoiceStatus
}

const StyledWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: ${(props) => `-${props.theme.space[12]}`};
`

const StyledRow = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: ${(props) => props.theme.space[12]};
`

const StyledPaymentContainer = styled.div``

const StyledPrice = styled.h3`
  margin-top: ${(props) => props.theme.space[4]};
`

const InvoiceCard = ({ id, name, date, money, status }: Props) => {
  return (
    <div role="button" tabIndex={0}>
      <Card>
        <StyledWrapper>
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
        </StyledWrapper>
      </Card>
    </div>
  )
}

export default InvoiceCard
