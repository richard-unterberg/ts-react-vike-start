import { PageContextClient, PageContextServer } from 'vike/types'

type PageContextUnionFnc = (pageContext: PageContextClient | PageContextServer) => string

export const getTitle = (pageContext: PageContextClient | PageContextServer) => {
  const val = pageContext.config.title
  if (typeof val === 'string') return val
  if (typeof val === 'function') {
    const fnc = val as PageContextUnionFnc
    return fnc(pageContext)
  }
  return 'Some default title'
}
export const getDescription = (pageContext: PageContextClient | PageContextServer) => {
  const val = pageContext.config.description
  if (typeof val === 'string') return val
  if (typeof val === 'function') {
    const fnc = val as PageContextUnionFnc
    return fnc(pageContext)
  }
  return 'Some default description'
}
