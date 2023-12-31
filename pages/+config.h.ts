import HeadDefault from '#root/layouts/HeadDefault'
import vikeReact from 'vike-react'
import type { Config } from 'vike/types'

import logoUrl from '../assets/logo.svg'
import Layout from '../layouts/LayoutDefault'

// Default config (can be overridden by pages)
export default {
  Layout,
  Head: HeadDefault,
  // <title>
  title: 'My Vike App',
  // <meta name="description">
  description: 'Demo showcasing Vike',
  // <link rel="icon" href="${favicon}" />
  favicon: logoUrl,
  extends: vikeReact,
} satisfies Config
