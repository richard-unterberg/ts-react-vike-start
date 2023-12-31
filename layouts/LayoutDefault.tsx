import './tailwind.css'

import React from 'react'

const LayoutDefault = ({ children }: { children: React.ReactNode }) => (
  <div className="flex max-w-5xl m-auto">{children}</div>
)

export default LayoutDefault
