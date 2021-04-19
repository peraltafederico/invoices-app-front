import styled from '@emotion/styled'
import React from 'react'
import Text from './text'

interface Props {
  children: React.ReactNode
  htmlFor?: string
}

const StyledLabel = styled.label`
  margin-bottom: ${(props) => props.theme.space[5]};
  display: block;
`

const InputLabel = ({ children, htmlFor }: Props) => {
  return (
    <StyledLabel htmlFor={htmlFor}>
      <Text variant="body2" muted>
        {children}
      </Text>
    </StyledLabel>
  )
}

export default InputLabel
