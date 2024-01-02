import { PageContextClient, PageContextServer } from 'vike/types'

type PageContextUnionFnc = (pageContext: PageContextClient | PageContextServer) => string

export const getTitle = (pageContext: PageContextClient | PageContextServer) => {
  const val = pageContext.config.title
  if (typeof val === 'string') return val
  if (typeof val === 'function') {
    const fnc = val as PageContextUnionFnc
    return fnc(pageContext)
  }
  // DON'T FORGET TO SET A TITLE
  // outputs the below if no title is given in +config.h.ts
  return `DON'T FORGET TO SET A TITLE in +config.h.ts`
}
export const getDescription = (pageContext: PageContextClient | PageContextServer) => {
  const val = pageContext.config.description
  if (typeof val === 'string') return val
  if (typeof val === 'function') {
    const fnc = val as PageContextUnionFnc
    return fnc(pageContext)
  }
  // DON'T FORGET TO SET A DESCRIPTION
  // outputs empty string if no desc is given in +config.h.ts
  return ``
}
