import { Theme } from '@emotion/react'

const lightTheme = (theme: Theme) => ({
  ...theme,
  darkMode: {
    cardBackground: `${theme.colors.lavenderWeb}`,
  },
})

export default lightTheme
