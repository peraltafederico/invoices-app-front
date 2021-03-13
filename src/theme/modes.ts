import baseTheme from './base'

const light = {
  mode: 'light',
  ...baseTheme,
  colors: {
    all: baseTheme.colors,
    text: baseTheme.colors.darkBlue.richBlack,
    background: baseTheme.colors.grey.cultured,
    primary: baseTheme.colors.darkBlue.spaceCadet[100],
    secondary: baseTheme.colors.violet.mediumSlateBlue,
    muted: baseTheme.colors.grey.coolGrey,
  },
}

const dark = {
  mode: 'dark',
  ...baseTheme,
  colors: {
    all: baseTheme.colors,
    text: baseTheme.colors.white,
    background: baseTheme.colors.darkBlue.xiketic,
    primary: baseTheme.colors.darkBlue.spaceCadet[300],
    secondary: baseTheme.colors.violet.mediumSlateBlue,
    muted: baseTheme.colors.violet.lavenderWeb,
  },
}

export default {
  light,
  dark,
}
