import styled from '@emotion/styled'
import NoInvoices from '../assets/no-content.inline.svg'
import {
  MIN_LARGE_DISPLAY_MEDIA_QUERY,
  MIN_TABLET_MEDIA_QUERY,
} from '../theme/base'

interface Props {
  title: string
}

const StyledContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 10.2rem;

  ${MIN_TABLET_MEDIA_QUERY} {
    margin-top: 21rem;
  }

  ${MIN_LARGE_DISPLAY_MEDIA_QUERY} {
    margin-top: 14.1rem;
  }
`

const StyledTitle = styled.h3`
  margin-bottom: 2.4rem;
  margin-top: 4rem;
  line-height: 1.4;

  ${MIN_TABLET_MEDIA_QUERY} {
    margin-top: ${(props) => props.theme.space[15]};
  }
`

const StyledFooter = styled.div`
  max-width: 20.1rem;
  text-align: center;
  max-height: 3.1rem;
`

const NoContent: React.FC<Props> = ({ children, title }) => {
  return (
    <StyledContainer>
      <NoInvoices />
      <StyledTitle>{title}</StyledTitle>
      <StyledFooter>{children}</StyledFooter>
    </StyledContainer>
  )
}

export default NoContent
