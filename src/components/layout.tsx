import styled from '@emotion/styled'
import React from 'react'
import { MIN_TABLET_MEDIA_QUERY } from '../theme/base'
import AppBar from './appbar'

interface Props {
  children: React.ReactNode
}

const StyledContent = styled.div`
  padding: ${(props) =>
    `${props.theme.space[13]} ${props.theme.space[12]} 10.5rem ${props.theme.space[12]}`};

  ${MIN_TABLET_MEDIA_QUERY} {
    padding: 5.6rem 4.8rem 17.3rem 4.8rem;
  }
`

const StyledWrapper = styled.div`
  min-height: 100vh;
  background: ${(props) => props.theme.colors.background};
`

const Layout: React.FC<Props> = ({ children }: Props) => {
  return (
    <StyledWrapper>
      <AppBar />
      <StyledContent>{children}</StyledContent>
    </StyledWrapper>
  )
}

export default Layout
