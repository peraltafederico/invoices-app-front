import React from 'react'
import { css, Global } from '@emotion/react'
import baseTheme from './theme/base'

const GlobalStyles = () => (
  <Global
    styles={css`
      html,
      body,
      div,
      span,
      a,
      h1,
      h2,
      h3,
      h4,
      h5,
      h6,
      p,
      blockquote,
      img,
      ol,
      ul,
      li,
      input,
      label,
      select,
      table,
      tbody,
      tfoot,
      thead,
      tr,
      th,
      td,
      footer,
      header,
      menu,
      nav,
      section,
      video {
        margin: 0 !important;
        padding: 0;
        font-size: 100%;
        list-style: none;
        border: 0;
      }

      html {
        -ms-text-size-adjust: 100%;
        -webkit-text-size-adjust: 100%;
      }
      body {
        margin: 0;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        font-family: ${baseTheme.fonts[0]};
        font-weight: ${baseTheme.fontWeights[0]};
        color: ${baseTheme.colors.darkBlue.richBlack};
        word-wrap: break-word;
      }
    `}
  />
)

export default GlobalStyles
