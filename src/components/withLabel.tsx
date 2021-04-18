import styled from '@emotion/styled'
import React from 'react'
import Label from './label'
import Text from './text'

interface Props {
  label: string
  id: string
  children: React.ReactNode
}

const StyledContainer = styled.div`
  display: flex;
  flex-direction: column;
`

const WithLabel: React.FC<Props> = ({ children, id, label }: Props) => {
  return (
    <StyledContainer>
      <Label htmlFor={id}>
        <Text variant="body2" muted>
          {label}
        </Text>
      </Label>
      {children}
    </StyledContainer>
  )
}

export default WithLabel
