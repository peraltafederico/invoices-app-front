import { css } from '@emotion/react'
import styled from '@emotion/styled'
import { navigate } from 'gatsby'
import ArrowDown from '../assets/arrow-down.inline.svg'
import Text from './text'

const StyledText = styled(Text)`
  transition: all 0.1s ease-in;
`

const StyledContainer = styled.button`
  display: flex;
  align-items: center;
  margin-bottom: ${(props) => props.theme.space[12]};
  background: transparent;
  cursor: pointer;

  &:hover {
    ${StyledText} {
      ${(props) =>
        props.theme.mode === 'dark' &&
        css`
          color: ${props.theme.colors.all.grey.coolGrey};
        `}

      ${(props) =>
        props.theme.mode === 'light' &&
        css`
          color: ${props.theme.colors.all.violet.glaucous};
        `}
    }
  }
`

const StyledArrowLeft = styled(ArrowDown)`
  transform: rotate(90deg);
  margin-right: 2.366rem;
`

type Props = {
  className?: string
  to: string
}

const GoBack = ({ className, to }: Props) => {
  return (
    <StyledContainer className={className} onClick={() => navigate(to)}>
      <StyledArrowLeft />
      <StyledText isBold variant="body2">
        Go back
      </StyledText>
    </StyledContainer>
  )
}

export default GoBack
