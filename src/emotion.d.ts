import '@emotion/react'

declare module '@emotion/react' {
  export interface Theme {
    mode: 'dark' | 'light'
    space: string[]
    fontSizes: string[]
    colors: {
      all: {
        violet: {
          mediumSlateBlue: string
          mediumPurple: string
          lavenderWeb: string
          glaucous: string
        }
        grey: {
          ghostWhite: string
          cultured: string
          coolGrey: string
        }
        darkBlue: {
          spaceCadet: {
            100: string
            200: string
            300: string
          }
          xiketic: string
          richBlack: string
        }
        red: {
          redSalsa: string
          lightCoral: string
        }
        black: string
        white: string
      }
      text: string
      background: string
      primary: string
      secondary: string
      muted: string
    }
    fonts: string[]
    fontWeights: string[]
    lineHeights: string[]
    sizes: string[]
    letterSpacings: string[]
    shadows: string[]
    radii: string[]
    breakpoints: string[]
  }
}
