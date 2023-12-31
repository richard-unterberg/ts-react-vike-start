/** @type {import('tailwindcss').Config} */
import type { Config } from 'tailwindcss'
import colors from 'tailwindcss/colors'
import tw from 'tailwindcss/defaultTheme'
import { type PluginAPI } from 'tailwindcss/types/config'

export default {
  content: ['./{pages,layouts,components,lib}/**/*.{html,js,jsx,ts,tsx}'],
  theme: {
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      black: '#000',
      white: '#fff',
      dark: colors.slate[950],
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
    extend: {
      fontSize: {
        base: ['18px', '24px'],
        small: ['16px', '20px'],
      },
      fontFamily: {
        sans: ['inter', ...tw.fontFamily.sans],
      },
      animation: {
        'pulse-fast': 'pulse 0.6s linear infinite',
      },
    },
  },
  plugins: [
    ({ addBase, theme }: PluginAPI) => {
      const extractColorVars = (colorObj: Record<string, string>, colorGroup = '') =>
        Object.entries(colorObj).reduce((vars, [colorKey, value]) => {
          const cssVariable =
            colorKey === 'DEFAULT' ? `--tw${colorGroup}` : `--tw${colorGroup}-${colorKey}`

          const newVars: Record<string, string> =
            typeof value === 'string'
              ? { [cssVariable]: value }
              : extractColorVars(value, `-${colorKey}`)

          return { ...vars, ...newVars }
        }, {})

      addBase({
        ':root': extractColorVars(theme('colors')),
      })
    },
  ],
} satisfies Config
