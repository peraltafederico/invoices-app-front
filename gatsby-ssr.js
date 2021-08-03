import React from 'react'
import Layout from './src/components/layout.tsx'
import { ThemeProvider } from '@emotion/react'
import themes from './src/theme/modes'
import {
  ThemeContext,
  useThemeContextValue,
  useThemeContext,
} from './src/context/themeContext'
import { ModalContext, useModalContextValue } from './src/context/modalContext'
import GlobalStyles from './src/globalStyles'
import ModalRoot from './src/components/modalRoot'
import { PageContext } from './src/context/pageContext'

const AppWrapper = ({ children }) => {
  const { theme } = useThemeContext()

  return <ThemeProvider theme={themes[theme]}>{children}</ThemeProvider>
}

const RootWrapper = ({ children }) => {
  const themeContextValue = useThemeContextValue()
  const modalContextValue = useModalContextValue()

  return (
    <ThemeContext.Provider value={themeContextValue}>
      <ModalContext.Provider value={modalContextValue}>
        <AppWrapper>{children}</AppWrapper>
      </ModalContext.Provider>
    </ThemeContext.Provider>
  )
}

export const wrapRootElement = ({ element }) => {
  return <RootWrapper>{element}</RootWrapper>
}

export const wrapPageElement = ({ element, props }) => {
  return (
    <PageContext.Provider value={props.pageContext}>
      <GlobalStyles />
      <ModalRoot />
      {element}
    </PageContext.Provider>
  )
}
