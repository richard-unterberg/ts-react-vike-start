import { useMemo } from 'react'

import { AppConfig } from '#lib/constants'
import { usePageContext } from '#root/renderer/usePageContext'

interface LinkProps {
  href: string
  external?: boolean
  children: React.ReactNode | React.ReactNode[]
  className?: string
  button?: boolean
}

const Link = ({ href, external, children, className = '', button }: LinkProps) => {
  const pageContext = usePageContext()
  const { urlPathname } = pageContext

  const isActive = useMemo(
    () => (href === '/' ? urlPathname === href : urlPathname.startsWith(href)),
    [href, urlPathname],
  )

  const generatedClassName = useMemo(() => {
    const staticClassName = 'transition-colors duration-200 ease-in-out inline-block text-center'

    if (button) {
      return `${
        isActive ? 'bg-primary pointer-events-none' : 'bg-primary bg-opacity-50 hover:bg-opacity-75'
      } p-3 ${className} ${staticClassName} `
    }

    return `${isActive ? 'text-primary' : 'text-light'} ${className} ${staticClassName}`
  }, [button, className, isActive])

  return (
    <a
      href={`${!external ? AppConfig.viteBaseUrl : ''}${href}`}
      className={generatedClassName}
      target={external ? '_blank' : '_self'}
      rel={external ? 'noreferrer' : ''}
    >
      {children}
    </a>
  )
}

export default Link
