import { LucideProps } from 'lucide-react'
import { lazy, Suspense, useEffect, useState } from 'react'

import { ICON_ID } from '#lib/icons/iconID'
import { LazyIconIconProps } from '#lib/icons/IconLazyRenderer'

interface AppIconProps extends LucideProps {
  icon: ICON_ID
}

const Icon = ({ icon, ...props }: AppIconProps) => {
  const [Component, setComponent] = useState<React.ComponentType<LazyIconIconProps>>(() => '')

  useEffect(() => {
    setComponent(() => lazy(() => import('#lib/icons/IconLazyRenderer')))
  }, [])

  if (icon) {
    return (
      <span
        className={`block ${props.className || ''}`}
        style={{ width: props.size, height: props.size }}
      >
        <Suspense fallback="">{Component && <Component icon={icon} {...props} />}</Suspense>
      </span>
    )
  }
  return null
}

export default Icon
