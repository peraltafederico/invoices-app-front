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
      button,
      video {
        margin: 0;
        padding: 0;
        border: 0;
        font-size: 100%;
        box-sizing: border-box;
        font-family: ${baseTheme.fonts[0]};
      }

      ol,
      ul {
        list-style: none;
      }

      h1,
      h2,
      h4,
      h4 {
        font-weight: ${baseTheme.fontWeights[1]};
      }

      h1 {
        font-size: ${baseTheme.fontSizes[4]};
        line-height: ${baseTheme.lineHeights[1]};
        letter-spacing: ${baseTheme.letterSpacings[5]};
      }

      h2 {
        font-size: ${baseTheme.fontSizes[3]};
        letter-spacing: ${baseTheme.letterSpacings[2]};
      }

      h3 {
        font-size: ${baseTheme.fontSizes[2]};
        line-height: ${baseTheme.lineHeights[3]};
        letter-spacing: ${baseTheme.letterSpacings[1]};
      }

      h4 {
        font-size: ${baseTheme.fontSizes[1]};
        line-height: ${baseTheme.lineHeights[2]};
        letter-spacing: ${baseTheme.letterSpacings[3]};
      }

      /* Chrome, Safari, Edge, Opera */
      input::-webkit-outer-spin-button,
      input::-webkit-inner-spin-button {
        -webkit-appearance: none;
        margin: 0;
      }

      /* Firefox */
      input[type='number'] {
        -moz-appearance: textfield;
      }

      html {
        font-size: 62.5%;
        -ms-text-size-adjust: 100%;
        -webkit-text-size-adjust: 100%;
      }
      body {
        margin: 0;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        word-wrap: break-word;
        font-family: ${baseTheme.fonts[0]};
        line-height: ${baseTheme.lineHeights[0]};
        font-weight: ${baseTheme.fontWeights[0]};
        color: ${baseTheme.colors.darkBlue.richBlack};
      }
    `}
  />
)

export default GlobalStyles
