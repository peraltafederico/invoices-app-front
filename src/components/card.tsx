import styled from '@emotion/styled'
import React from 'react'
import { MIN_TABLET_MEDIA_QUERY } from '../theme/base'

interface Props {
  children: React.ReactNode
  className?: string
}

const StyledWrapper = styled.div`
  padding: ${(props) => props.theme.space[12]};
  background: ${(props) => props.theme.colors.all.white};
  box-shadow: ${(props) => props.theme.shadows[0]};
  border-radius: ${(props) => props.theme.radii[0]};

  ${MIN_TABLET_MEDIA_QUERY} {
    padding: ${(props) => `${props.theme.space[8]} ${props.theme.space[13]}`};
  }
`

const Card = ({ children, className }: Props) => {
  return <StyledWrapper className={className}>{children}</StyledWrapper>
}

export default Card
