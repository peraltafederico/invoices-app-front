import { css } from '@emotion/react'
import styled from '@emotion/styled'

interface Props {
  mobileDown?: boolean
  mobileUp?: boolean
  tabletDown?: boolean
  tabletUp?: boolean
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  as?: React.ElementType<any>
}

const StyledContainer = styled.div<Props>`
  display: block;

  ${(props) =>
    props.mobileDown &&
    css`
      @media (max-width: ${`calc(${props.theme.breakpoints[0]} - 1px)`}) {
        display: none;
      }
    `}

  ${(props) =>
    props.mobileUp &&
    css`
      @media (min-width: ${props.theme.breakpoints[0]}) {
        display: none;
      }
    `}

  ${(props) =>
    props.tabletDown &&
    css`
      @media (max-width: ${`calc(${props.theme.breakpoints[1]} - 1px)`}) {
        display: none;
      }
    `}

  ${(props) =>
    props.tabletUp &&
    css`
      @media (min-width: ${props.theme.breakpoints[1]}) {
        display: none;
      }
    `}
`

const Hidden: React.FC<Props> = ({ children, as, ...props }) => {
  return (
    <StyledContainer {...props} as={as}>
      {children}
    </StyledContainer>
  )
}

export default Hidden
