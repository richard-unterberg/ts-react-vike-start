import { hydrateRoot } from 'react-dom/client'
import type { OnRenderClientAsync } from 'vike/types'

import { getTitle } from '#utils/index'

import PageShell from './PageShell'

// This onRenderClient() hook only supports SSR, see https://vike.dev/render-modes for how to modify onRenderClient()
// to support SPA
const onRenderClient: OnRenderClientAsync = async (
  pageContext,
): ReturnType<OnRenderClientAsync> => {
  const { Page, pageProps } = pageContext
  if (!Page) throw new Error('Client-side render() hook expects pageContext.Page to be defined')
  const root = document.getElementById('react-root')
  if (!root) throw new Error('DOM element #react-root not found')

  if (!pageContext.isHydration) {
    document.title = getTitle(pageContext)
  }

  hydrateRoot(
    root,
    <PageShell pageContext={pageContext}>
      <Page {...pageProps} />
    </PageShell>,
  )
}

export default onRenderClient
