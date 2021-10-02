import { createContext, useContext, useEffect, useState } from 'react'

type AvailableThemes = 'dark' | 'light'

interface ThemeContextData {
  theme: AvailableThemes
  setTheme: React.Dispatch<React.SetStateAction<AvailableThemes>>
}

export const ThemeContext = createContext<ThemeContextData | undefined>(
  undefined
)

export const useThemeContextValue = () => {
  const [theme, setTheme] = useState<AvailableThemes>('light')

  useEffect(() => {
    if (!localStorage.getItem('theme')) {
      if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
        setTheme('dark')
      } else {
        setTheme('light')
      }
    } else {
      setTheme(localStorage.getItem('theme') as AvailableThemes)
    }
  }, [])

  useEffect(() => {
    localStorage.setItem('theme', theme)
  }, [theme])

  return {
    theme,
    setTheme,
  }
}

export const useThemeContext = (): ThemeContextData => {
  const themeContext = useContext(ThemeContext)

  if (!themeContext) {
    // eslint-disable-next-line no-console
    throw new Error(
      'You should use useThemeContext insie ThemeContext provider'
    )
  }

  return themeContext
}
