import styled from '@emotion/styled'
import React from 'react'

interface Props {
  children: React.ReactNode
  className?: string
}

const StyledWrapper = styled.div`
  padding: ${(props) => props.theme.space[12]};
  background: ${(props) => props.theme.colors.all.white};
  box-shadow: ${(props) => props.theme.shadows[0]};
  border-radius: ${(props) => props.theme.radii[0]};
`

const Card = ({ children, className }: Props) => {
  return <StyledWrapper className={className}>{children}</StyledWrapper>
}

export default Card
