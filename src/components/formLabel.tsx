import styled from '@emotion/styled'
import React from 'react'
import Text from './text'

interface Props {
  children: React.ReactNode
  htmlFor?: string
}

const StyledLabel = styled.label`
  margin-bottom: ${(props) => props.theme.space[12]};
  display: block;
`

const StyledText = styled(Text)`
  color: ${(props) => props.theme.colors.secondary};
`

const FormLabel = ({ children, htmlFor }: Props) => {
  return (
    <StyledLabel htmlFor={htmlFor}>
      <StyledText variant="body2" bold>
        {children}
      </StyledText>
    </StyledLabel>
  )
}

export default FormLabel
