import { usePageContext } from '#renderer/usePageContext'

const Link = ({ href, children }: { href: string; children: string }) => {
  const pageContext = usePageContext()
  const { urlPathname } = pageContext
  const isActive = href === '/' ? urlPathname === href : urlPathname.startsWith(href)
  return (
    <a href={href} className={isActive ? 'is-active' : undefined}>
      {children}
    </a>
  )
}

export default Link
