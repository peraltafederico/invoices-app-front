const allColors = {
  violet: {
    mediumSlateBlue: '#7C5DFA',
    mediumPurple: '#9277FF',
    lavenderWeb: '#DFE3FA',
    glaucous: '#7E88C3',
  },
  grey: {
    ghostWhite: '##F9FAFE',
    cultured: '#F8F8FB',
    coolGrey: '#888EB0',
  },
  darkBlue: {
    spaceCadet: {
      100: '#373B53',
      200: '#252945',
      300: '#1E2139',
    },
    xiketic: '#141625',
    richBlack: '#0C0E16',
  },
  red: {
    redSalsa: '#EC5757',
    lightCoral: '#FF9797',
  },
  black: '#000000',
  white: '#FFFFFF',
}

const light = {
  mode: 'light',
  colors: {
    all: allColors,
    text: allColors.darkBlue.richBlack,
    background: allColors.grey.cultured,
    primary: allColors.darkBlue.spaceCadet[100],
    secondary: allColors.violet.mediumSlateBlue,
    muted: allColors.grey.coolGrey,
  },
}

const dark = {
  mode: 'dark',
  colors: {
    all: allColors,
    text: allColors.white,
    background: allColors.darkBlue.xiketic,
    primary: allColors.darkBlue.spaceCadet[300],
    secondary: allColors.violet.mediumSlateBlue,
    muted: allColors.violet.lavenderWeb,
  },
}

export default {
  light,
  dark,
}
