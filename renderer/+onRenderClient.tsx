import { createRoot, hydrateRoot, Root } from 'react-dom/client'
import type { OnRenderClientAsync } from 'vike/types'

import LayoutDefault from '#layouts/LayoutDefault'
import { getTitle } from '#utils/index'

// This onRenderClient() hook only supports SSR, see https://vike.dev/render-modes for how to modify onRenderClient()
// to support SPA
let root: Root
const onRenderClient: OnRenderClientAsync = async (
  pageContext,
): ReturnType<OnRenderClientAsync> => {
  const { Page, pageProps } = pageContext
  if (!Page) throw new Error('Client-side render() hook expects pageContext.Page to be defined')
  const container = document.getElementById('react-root')
  if (!container) throw new Error('DOM element #react-root not found')

  if (!pageContext.isHydration) {
    document.title = getTitle(pageContext)
  }

  const page = (
    <LayoutDefault pageContext={pageContext}>
      <Page {...pageProps} />
    </LayoutDefault>
  )

  if (pageContext.isHydration) {
    root = hydrateRoot(container, page)
  } else {
    if (!root) {
      root = createRoot(container)
    }
    root.render(page)
  }
}

export default onRenderClient
