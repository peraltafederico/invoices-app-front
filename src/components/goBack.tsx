import styled from '@emotion/styled'
import ArrowDown from '../assets/arrow-down.inline.svg'
import Text from './text'

const StyledContainer = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: ${(props) => props.theme.space[12]};
`

const ArrowLeft = styled(ArrowDown)`
  transform: rotate(90deg);
  margin-right: 2.366rem;
`

type Props = {
  className?: string
}

const GoBack = ({ className }: Props) => {
  return (
    <StyledContainer className={className}>
      <ArrowLeft />
      <Text isBold variant="body2">
        Go back
      </Text>
    </StyledContainer>
  )
}

export default GoBack
