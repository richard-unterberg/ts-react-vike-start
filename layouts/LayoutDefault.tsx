import '@fontsource/inter/latin-400.css'
import '@fontsource/inter/latin-700.css'
import '#layouts/styles.css'

import { ReactNode } from 'react'

import Topbar from '#layouts/Topbar'

const LayoutDefault = ({ children }: { children: ReactNode }) => (
  <div className="max-w-4xl m-auto text-light">
    <div className="relative container px-5 mx-auto text-white text-base">
      <Topbar />
      <div>{children}</div>
    </div>
  </div>
)

export default LayoutDefault
