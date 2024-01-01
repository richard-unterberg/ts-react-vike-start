import { LucideProps } from 'lucide-react'
import { useMemo } from 'react'

import { ICON_ID } from '#lib/icons/iconID'
import APP_ICON from '#lib/icons/iconMap'

export interface LazyIconIconProps extends LucideProps {
  icon: ICON_ID
}

const IconLazyRenderer = ({ icon, ...props }: LazyIconIconProps) => {
  if (typeof window === undefined) {
    throw new Error('IconLazyRenderer must be used in browser')
  }

  const AppIconComponent = useMemo(() => APP_ICON[icon].component ?? null, [icon])

  if (AppIconComponent) {
    return <AppIconComponent {...props} />
  }
  return null
}

export default IconLazyRenderer
