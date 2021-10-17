import { PageProps } from 'gatsby'
import { createContext, useContext } from 'react'

export const PageContext = createContext<PageProps | undefined>(undefined)

export const usePageContext = <T = object>() => {
  // @ts-ignore
  const pageContext = useContext<PageProps<object, T> | undefined>(PageContext)

  if (!pageContext) {
    // eslint-disable-next-line no-console
    throw new Error('You should use usePageContext insie PageContext provider')
  }

  return pageContext
}
