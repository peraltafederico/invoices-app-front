import '@emotion/react'

declare module '@emotion/react' {
  export interface Theme {
    colors: {
      mediumSlateBlue: string
      mediumPurple: string
      spaceCadet: {
        100: string
        200: string
        300: string
      }
      lavenderWeb: string
      coolGrey: string
      glaucous: string
      richBlack: string
      redSalsa: string
      lightCoral: string
      cultured: string
      xiketic: string
      white: string
      ghostWhite: string
    }
    lightMode: {
      cardBackground: string
    }
    blackMode: {
      cardBackground: string
    }
  }
}
