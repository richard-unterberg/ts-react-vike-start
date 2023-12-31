/* eslint-disable @typescript-eslint/no-namespace */
// https://vike.dev/pageContext#typescript
type Page = (pageProps: PageProps) => React.ReactElement

declare global {
  namespace Vike {
    interface PageContext {
      Page: Page
      pageProps?: PageProps
      urlPathname: string
      exports: {
        documentProps?: {
          title?: string
          description?: string
        }
      }
    }
  }
}

export type PageProps = Record<string, unknown>
