import '@fontsource/inter/latin-400.css'
import '@fontsource/inter/latin-700.css'
import '#layouts/styles.css'

import React from 'react'

import Nav from '#components/Nav'

const LayoutDefault = ({ children }: { children: React.ReactNode }) => (
  <div className="max-w-5xl m-auto text-light">
    <Nav />
    <div>{children}</div>
  </div>
)

export default LayoutDefault
