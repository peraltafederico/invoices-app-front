import { createContext, useContext } from 'react'

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const PageContext = createContext<any | undefined>(undefined)

export const usePageContext = <T extends object>(): T => {
  const pageContext = useContext(PageContext)

  if (!pageContext) {
    // eslint-disable-next-line no-console
    throw new Error('You should use usePageContext insie PageContext provider')
  }

  return pageContext
}
