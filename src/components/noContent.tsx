import styled from '@emotion/styled'
import NoInvoices from '../assets/no-content.inline.svg'
import Text from './text'

const StyledContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 10.2rem;
`

const StyledTitle = styled.h3`
  margin-bottom: 2.4rem;
  margin-top: 4rem;
  line-height: 1.4;
`

const StyledFooter = styled.div`
  max-width: 20.1rem;
  text-align: center;
  max-height: 3.1rem;
`

const NoContent = () => {
  return (
    <StyledContainer>
      <NoInvoices />
      <StyledTitle>There is nothing here</StyledTitle>
      <StyledFooter>
        <Text variant="body2" isMuted>
          Create an invoice by clicking the
        </Text>
        <Text variant="body2" isMuted>
          <Text as="span" isBold variant="body2">
            New
          </Text>{' '}
          button and get started
        </Text>
      </StyledFooter>
    </StyledContainer>
  )
}

export default NoContent
