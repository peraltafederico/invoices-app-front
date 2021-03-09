import { Theme } from '@emotion/react'

const lightTheme = (theme: Theme) => ({
  ...theme,
  lightMode: {
    cardBackground: `${theme.colors.white}`,
    cardHighlightBackground: `${theme.colors.ghostWhite}`,
    cardHighlightFooter: `${theme.colors.spaceCadet['100']}`,
    formBackground: `${theme.colors.white}`,
    sidebarBackground: `${theme.colors.spaceCadet['100']}`,
    background: `${theme.colors.cultured}`,
    modalBackground: `${theme.colors.white}`,
  },
})

export default lightTheme
