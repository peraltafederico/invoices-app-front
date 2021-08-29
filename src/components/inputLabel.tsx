import styled from '@emotion/styled'
import React from 'react'
import Text from './text'

interface Props {
  children: React.ReactNode
  htmlFor?: string
  errorMessage?: string
}

const StyledLabel = styled.label`
  margin-bottom: ${(props) => props.theme.space[5]};
  display: flex;
  justify-content: space-between;
  white-space: nowrap;
`

const StyledErrorMessage = styled(Text)`
  max-width: 40%;
  overflow: hidden;
  text-overflow: ellipsis;
`

const InputLabel = ({ children, htmlFor, errorMessage }: Props) => {
  return (
    <StyledLabel htmlFor={htmlFor}>
      <Text variant="body2" isMuted isError={!!errorMessage}>
        {children}
      </Text>
      <StyledErrorMessage
        variant="body2"
        isMuted
        isError={!!errorMessage}
        title={errorMessage}
      >
        {errorMessage}
      </StyledErrorMessage>
    </StyledLabel>
  )
}

export default InputLabel
