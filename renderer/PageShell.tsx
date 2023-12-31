import React from 'react'
import type { PageContext } from 'vike/types'

import LayoutDefault from '#layouts/LayoutDefault'
import { PageContextProvider } from '#renderer/usePageContext'

const PageShell = ({
  children,
  pageContext,
}: {
  children: React.ReactNode
  pageContext: PageContext
}) => (
  <React.StrictMode>
    <PageContextProvider pageContext={pageContext}>
      <LayoutDefault>{children}</LayoutDefault>
    </PageContextProvider>
  </React.StrictMode>
)

export default PageShell
