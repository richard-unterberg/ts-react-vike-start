import path from 'path'
import react from '@vitejs/plugin-react'
import ssr from 'vike/plugin'
// eslint-disable-next-line import/no-extraneous-dependencies
import { defineConfig } from 'vite'

export default defineConfig({
  base: '/ts-react-vike-start/', // remove for using root
  plugins: [react({}), ssr({ prerender: true })],
  server: {
    port: 5247,
  },
  preview: {
    port: 4248,
  },
  ssr: {
    noExternal: ['tailwind-styled-components'],
  },
  resolve: {
    alias: {
      '#utils': path.resolve(__dirname, './lib/utils/'),
      '#hooks': path.resolve(__dirname, './lib/hooks/'),
      '#types': path.resolve(__dirname, './lib/types/'),
      '#lib': path.resolve(__dirname, './lib/'),
      '#layouts': path.resolve(__dirname, './layouts/'),
      '#renderer': path.resolve(__dirname, './renderer/'),
      '#components': path.resolve(__dirname, './components/'),
      '#root': __dirname,
    },
  },
})
