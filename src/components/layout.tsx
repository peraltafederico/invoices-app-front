/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import * as React from 'react'
import { css } from '@emotion/react'
import { useStaticQuery, graphql } from 'gatsby'
import styled from '@emotion/styled'
import Header from './header'
import './layout.css'
import { useThemeContext } from '../context/themeContext'

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  const { setTheme } = useThemeContext()

  const Container = styled.div`
    margin: 0 auto;
    max-width: 960;
    padding: 0 1.0875rem 1.45rem;

    ${(props) =>
      props.theme.mode === 'light' &&
      css`
        background-color: ${props.theme.colors.all.red.redSalsa};
      `}

    ${(props) =>
      props.theme.mode === 'dark' &&
      css`
        background-color: ${props.theme.colors.all.black};
      `}
  `

  return (
    <>
      <button type="button" onClick={() => setTheme('dark')}>
        switch
      </button>
      <Header siteTitle={data.site.siteMetadata?.title || `Title`} />
      <Container>
        <main>{children}</main>
        <footer
          style={{
            marginTop: `2rem`,
          }}
        >
          © {new Date().getFullYear()}, Built with
          {` `}
          <a href="https://www.gatsbyjs.com">Gatsby</a>
        </footer>
      </Container>
    </>
  )
}

export default Layout
