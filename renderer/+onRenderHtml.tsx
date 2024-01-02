import { renderToStream } from 'react-streaming/server'
import { escapeInject } from 'vike/server'
import type { InjectFilterEntry, OnRenderHtmlAsync, PageContextServer } from 'vike/types'

import LayoutDefault from '#layouts/LayoutDefault'
import logoUrl from '#root/assets/logo.svg'
import { getDescription, getTitle } from '#utils/index'

// userAgent seems not typed in vike, we extend the PageContextServer interface
interface ExtendedPageContext extends PageContextServer {
  userAgent: string
}

const onRenderHtml: OnRenderHtmlAsync = async (pageContext): ReturnType<OnRenderHtmlAsync> => {
  const { Page, pageProps, userAgent } = pageContext as ExtendedPageContext

  if (!Page) throw new Error('My render() hook expects pageContext.Page to be defined')
  const stream = await renderToStream(
    <LayoutDefault pageContext={pageContext}>
      <Page {...pageProps} />
    </LayoutDefault>,
    { userAgent },
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
        <div id="react-root">${stream}</div>
      </body>
    </html>`

  // controls what is injected into the html header on server side
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

      // no woff extension - only modern woff2 preloaded
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
