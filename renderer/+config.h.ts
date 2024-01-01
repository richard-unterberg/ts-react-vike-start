import type { Config } from 'vike/types'

// https://vike.dev/config
export default {
  /* To enable Client-side Routing:
  clientRouting: true,
  // !! WARNING !! Before doing so, read https://vike.dev/clientRouting */

  // See https://vike.dev/data-fetching
  passToClient: ['documentProps', 'pageProps'],
  clientRouting: true,
  hydrationCanBeAborted: true,
  meta: {
    Head: {
      env: { server: true },
    },
    Layout: {
      env: { server: true, client: true },
    },
    title: {
      env: { server: true, client: true },
    },
    ssr: {
      env: { config: true },
    },
    Page: {
      env: { server: true, client: true },
    },
  },
} satisfies Config
