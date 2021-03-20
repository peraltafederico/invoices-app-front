import React from 'react'
import Layout from './src/components/layout.tsx'
import { ThemeProvider } from '@emotion/react'
import themes from './src/theme/modes'
import {
  ThemeContext,
  useThemeContextValue,
  useThemeContext,
} from './src/context/themeContext'
import GlobalStyles from './src/globalStyles'

const AppWrapper = ({ children }) => {
  const { theme } = useThemeContext()

  return <ThemeProvider theme={themes[theme]}>{children}</ThemeProvider>
}

const RootWrapper = ({ children }) => {
  const themeContextValue = useThemeContextValue()

  return (
    <ThemeContext.Provider value={themeContextValue}>
      <AppWrapper>{children}</AppWrapper>
    </ThemeContext.Provider>
  )
}

export const wrapRootElement = ({ element }) => {
  return <RootWrapper>{element}</RootWrapper>
}

export const wrapPageElement = ({ element, props }) => {
  return (
    <div>
      <GlobalStyles />
      <Layout {...props}>{element}</Layout>
    </div>
  )
}
