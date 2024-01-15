// uno.config.ts
import { colors } from '@unocss/preset-wind'
import { defineConfig, presetUno } from 'unocss'

export default defineConfig({
  presets: [presetUno()],
  theme: {
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      black: '#000',
      white: '#fff',
      dark: colors.slate[950], // '#020617'
      darkLight: colors.slate[900],
      darkLightBorder: colors.slate[800],
      grayDark: colors.slate[600],
      gray: colors.slate[400],
      grayLight: colors.slate[300],
      light: colors.slate[200],
      primary: colors.sky[600],
      success: '#27C485',
      warning: '#F1B650',
      error: colors.red[800],
    },
    fontSize: {
      base: ['18px', '24px'],
      small: ['16px', '20px'],
    },
    fontFamily: {
      sans: 'Inter',
    },
  },
  preflights: [
    {
      getCSS: ({ theme }) =>
        `
          body, html {
            background-color: ${theme.colors?.dark};
          }
        `,
    },
  ],
})
