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
import {
  ApolloClient,
  InMemoryCache,
  createHttpLink,
  ApolloProvider,
  ApolloLink,
  from,
} from '@apollo/client'
import { onError } from '@apollo/client/link/error'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

const successLink = new ApolloLink((operation, forward) => {
  return forward(operation).map((response) => {
    toast.success("All good. Changes will appear soon.")

    return response
  })
})

const errorLink = onError(() => {
  toast.error('There was an error :(')
})

const httpLink = createHttpLink({
  uri: 'http://localhost:4000/graphql',
  credentials: 'same-origin',
})

const client = new ApolloClient({
  cache: new InMemoryCache(),
  ssrMode: true,
  link: from([successLink, errorLink, httpLink]),
})

const AppWrapper = ({ children }) => {
  const { theme } = useThemeContext()

  return (
    <ThemeProvider theme={themes[theme]}>
      <ToastContainer />
      {children}
    </ThemeProvider>
  )
}

const RootWrapper = ({ children }) => {
  const themeContextValue = useThemeContextValue()
  const modalContextValue = useModalContextValue()

  return (
    <ApolloProvider client={client}>
      <ThemeContext.Provider value={themeContextValue}>
        <ModalContext.Provider value={modalContextValue}>
          <AppWrapper>{children}</AppWrapper>
        </ModalContext.Provider>
      </ThemeContext.Provider>
    </ApolloProvider>
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
