import React from 'react'
import Layout from './src/components/layout.tsx'
import { ThemeProvider } from '@emotion/react'
import baseTheme from './src/theme/base'
import lightTheme from './src/theme/light'

export const wrapRootElement = ({ element }) => {
  return (
    <ThemeProvider theme={baseTheme}>
      <ThemeProvider theme={lightTheme}>{element}</ThemeProvider>
    </ThemeProvider>
  )
}

export const wrapPageElement = ({ element, props }) => {
  return <Layout {...props}>{element}</Layout>
}
