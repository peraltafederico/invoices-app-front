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
import fetch from 'cross-fetch'

const successLink = new ApolloLink((operation, forward) => {
  return forward(operation).map((response) => {
    if (response.errors) {
      return response
    }

    toast.success('All good. Changes will appear soon.')

    return response
  })
})

const errorLink = onError(({ response }) => {
  toast.error('There was an error :(')

  if (response) {
    response.errors = null
  }

  return null
})

const httpLink = createHttpLink({
  uri: `${process.env.GATSBY_API_BASE_URL}/graphql`,
  credentials: 'same-origin',
  fetch,
})

const client = new ApolloClient({
  cache: new InMemoryCache(),
  defaultOptions: {
    mutate: {
      errorPolicy: 'all',
    },
  },
  ssrMode: true,
  link: from([errorLink, successLink, httpLink]),
})

const AppWrapper = ({ children }) => {
  const { theme } = useThemeContext()

  return (
    <ThemeProvider theme={themes[theme]}>
      <ToastContainer theme={theme} />
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
