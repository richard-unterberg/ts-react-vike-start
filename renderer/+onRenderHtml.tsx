import ReactDOMServer from 'react-dom/server'
import { dangerouslySkipEscape, escapeInject } from 'vike/server'
import type { InjectFilterEntry, OnRenderHtmlAsync } from 'vike/types'

import logoUrl from '#root/assets/logo.svg'
import PageShell from '#root/renderer/PageShell'
import { getDescription, getTitle } from '#utils/index'

const onRenderHtml: OnRenderHtmlAsync = async (pageContext): ReturnType<OnRenderHtmlAsync> => {
  const { Page, pageProps } = pageContext
  // This onRenderHtml() hook only supports SSR, see https://vike.dev/render-modes for how to modify
  // onRenderHtml() to support SPA
  if (!Page) throw new Error('My render() hook expects pageContext.Page to be defined')
  const pageHtml = ReactDOMServer.renderToString(
    <PageShell pageContext={pageContext}>
      <Page {...pageProps} />
    </PageShell>,
  )

  const title = getTitle(pageContext)
  const description = getDescription(pageContext)

  const documentHtml = escapeInject`<!DOCTYPE html>
    <html lang="en">
      <head>
        <meta charset="UTF-8" />
        <link rel="icon" href="${logoUrl}" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="description" content="${description}" />
        <title>${title}</title>
      </head>
      <body>
        <div id="react-root">${dangerouslySkipEscape(pageHtml)}</div>
      </body>
    </html>`

  const injectFilter = (assets: InjectFilterEntry[]): void => {
    assets.forEach(asset => {
      if (
        // We don't touch entry assets (recommended)
        asset.isEntry ||
        // We don't touch JavaScript preloading (recommended)
        asset.assetType === 'script'
      ) {
        return
      }

      // Don't preload fonts with woff extension
      if (asset.assetType === 'font') {
        const src = asset.src.toString()
        if (src.endsWith('.woff')) {
          asset.inject = false
        }
      }
    })
  }

  return {
    documentHtml,
    pageContext: {},
    injectFilter,
    // to get injectFilter accepted cast this 'any' here sooooo badly  :`(
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
  } as any
}

export default onRenderHtml
