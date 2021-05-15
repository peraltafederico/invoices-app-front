import styled from '@emotion/styled'
import { navigate } from 'gatsby'
import ArrowDown from '../assets/arrow-down.inline.svg'
import Text from './text'

const StyledContainer = styled.button`
  display: flex;
  align-items: center;
  margin-bottom: ${(props) => props.theme.space[12]};
  background: transparent;
  cursor: pointer;
`

const ArrowLeft = styled(ArrowDown)`
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
      <ArrowLeft />
      <Text isBold variant="body2">
        Go back
      </Text>
    </StyledContainer>
  )
}

export default GoBack
