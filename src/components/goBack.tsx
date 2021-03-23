import styled from '@emotion/styled'
import React from 'react'
import ArrowDown from '../assets/arrow-down.inline.svg'
import Text from './text'

const StyledContainer = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: ${(props) => props.theme.space[13]};
`

const ArrowLeft = styled(ArrowDown)`
  transform: rotate(90deg);
  margin-right: 2.366rem;
`

const GoBack = () => {
  return (
    <StyledContainer>
      <ArrowLeft />
      <Text bold variant="body2">
        Go back
      </Text>
    </StyledContainer>
  )
}

export default GoBack
