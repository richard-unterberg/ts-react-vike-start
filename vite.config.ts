import react from '@vitejs/plugin-react'
import ssr from 'vike/plugin'
// eslint-disable-next-line import/no-extraneous-dependencies
import { defineConfig } from 'vite'

export default defineConfig({
  plugins: [react({}), ssr({})],
})
