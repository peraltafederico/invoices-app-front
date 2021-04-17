import styled from '@emotion/styled'
import React from 'react'

interface Props {
  children: React.ReactNode
  htmlFor: string
}

const StyledLabel = styled.label`
  margin-bottom: ${(props) => props.theme.space[5]};
`

const Label = ({ children, htmlFor }: Props) => {
  return <StyledLabel htmlFor={htmlFor}>{children}</StyledLabel>
}

export default Label
