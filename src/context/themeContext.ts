import { createContext, useContext, useState } from 'react'

type AvailableThemes = 'dark' | 'light'

interface ThemeContextData {
  theme: AvailableThemes
  setTheme: React.Dispatch<React.SetStateAction<AvailableThemes>>
}

export const ThemeContext = createContext<ThemeContextData | undefined>(
  undefined
)

export const useThemeContextValue = () => {
  const [theme, setTheme] = useState<AvailableThemes>('dark')

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
