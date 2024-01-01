import { usePageContext } from '#root/renderer/usePageContext'

interface LinkProps {
  href: string
  external?: boolean
  children: React.ReactNode | React.ReactNode[]
  className?: string
}

const Link = ({ href, external, children, className = '' }: LinkProps) => {
  const pageContext = usePageContext()
  const { urlPathname } = pageContext
  const isActive = href === '/' ? urlPathname === href : urlPathname.startsWith(href)
  return (
    <a
      href={href}
      className={isActive ? `is-active ${className}` : `${className}`}
      target={external ? '_blank' : '_self'}
      rel={external ? 'noreferrer' : ''}
    >
      {children}
    </a>
  )
}

export default Link
