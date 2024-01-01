import '@fontsource/inter/latin-400.css'
import '@fontsource/inter/latin-700.css'
import '#layouts/styles.css'

import { ReactNode, StrictMode } from 'react'
import { PageContextClient, PageContextServer } from 'vike/types'

import Footer from '#layouts/Footer'
import Header from '#layouts/Header'
import { PageContextProvider } from '#renderer/usePageContext'

const LayoutDefault = ({
  pageContext,
  children,
}: {
  pageContext: PageContextClient | PageContextServer
  children: ReactNode
}) => (
  <StrictMode>
    <PageContextProvider pageContext={pageContext}>
      <div className="max-w-4xl m-auto text-light">
        <div className="relative container px-5 mx-auto text-white text-base">
          <Header />
          <div>{children}</div>
          <Footer />
        </div>
      </div>
    </PageContextProvider>
  </StrictMode>
)

export default LayoutDefault
