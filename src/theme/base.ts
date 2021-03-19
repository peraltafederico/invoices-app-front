const baseTheme = {
  space: [
    '0rem',
    '0.2rem',
    '0.4rem',
    '0.6rem',
    '0.8rem',
    '1.0rem',
    '1.2rem',
    '1.4rem',
    '1.6rem',
    '1.8rem',
    '2.0rem',
    '2.2rem',
    '2.4rem',
    '3.2rem',
    '4.8rem',
    '6.4rem',
  ],
  colors: {
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
  },
  fonts: ["'Spartan', sans-serif"],
  fontWeights: [500, 700],
  sizes: ['73rem'],
  fontSizes: ['1.1rem', '1.2rem', '1.6rem', '2rem', '3.2rem'],
  lineHeights: [1.1, 1.125, 1.25, 1.5, 1.64],
  letterSpacings: [
    '-0.1rem',
    '-0.08rem',
    '-0.063rem',
    '-0.025rem',
    '-0.023rem',
  ],
  breakpoints: ['48.0rem', '76.8rem', '128rem'],
  shadows: ['0rem 1rem 1rem -1rem rgba(72, 84, 159, 0.100397)'],
  radii: ['0.8rem', '0.6rem'],
}

export const MIN_LARGE_DISPLAY_MEDIA_QUERY = `@media (min-width:${baseTheme.breakpoints[2]})`
export const MIN_TABLET_MEDIA_QUERY = `@media (min-width:${baseTheme.breakpoints[1]})`
export const MIN_MOBILE_MEDIA_QUERY = `@media (min-width:${baseTheme.breakpoints[0]})`

export default baseTheme
