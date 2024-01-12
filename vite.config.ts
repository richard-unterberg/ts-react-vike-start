import path from 'path'
import react from '@vitejs/plugin-react'
import { visualizer } from 'rollup-plugin-visualizer'
import UnoCSS from 'unocss/vite'
import vike from 'vike/plugin'
import { defineConfig, PluginOption } from 'vite'

import { AppConfig } from './lib/constants'

// to analyze bundle, run `ANALYZE=true npm run build`
const analyze = process.env.ANALYZE === 'true'

export default defineConfig({
  base: AppConfig.viteBaseUrl, // remove for using root
  plugins: [
    react(),
    UnoCSS(),
    vike({ prerender: true, trailingSlash: true }),
    analyze &&
      (visualizer({
        template: 'treemap',
        open: true,
        filename: 'bundle-analyze.html', // will be saved in project's root
      }) as PluginOption),
  ],
  optimizeDeps: {
    include: ['react/jsx-runtime'],
  },
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
