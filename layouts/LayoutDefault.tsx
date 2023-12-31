import '@fontsource/inter/latin-400.css'
import '@fontsource/inter/latin-700.css'
import '#layouts/styles.css'

import React from 'react'

const LayoutDefault = ({ children }: { children: React.ReactNode }) => (
  <div className="flex max-w-5xl m-auto">{children}</div>
)

export default LayoutDefault
