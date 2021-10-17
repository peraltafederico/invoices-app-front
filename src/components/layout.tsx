/* eslint-disable react/jsx-fragments */
import styled from '@emotion/styled'
import React from 'react'
import {
  MIN_LARGE_DISPLAY_MEDIA_QUERY,
  MIN_TABLET_MEDIA_QUERY,
} from '../theme/base'
import AppBar from './appbar'
import SEO from './seo'

interface Props extends React.ComponentProps<typeof SEO> {
  children: React.ReactNode
  className?: string
}

const StyledContent = styled.div`
  padding: ${(props) =>
    `${props.theme.space[13]} ${props.theme.space[12]} 10.5rem ${props.theme.space[12]}`};

  ${MIN_TABLET_MEDIA_QUERY} {
    padding: 5.6rem 4.8rem 17.3rem 4.8rem;
  }

  ${MIN_LARGE_DISPLAY_MEDIA_QUERY} {
    padding: 7.2rem 0 0.4rem 0;
  }
`

const StyledWrapper = styled.div`
  min-height: 100vh;
  background: ${(props) => props.theme.colors.background};
`

const Layout: React.FC<Props> = ({
  children,
  className,
  description,
  meta,
  title,
}: Props) => {
  return (
    <React.Fragment>
      <SEO description={description} meta={meta} title={title} />
      <StyledWrapper className={className}>
        <AppBar />
        <StyledContent id="content">{children}</StyledContent>
      </StyledWrapper>
    </React.Fragment>
  )
}

export default Layout
