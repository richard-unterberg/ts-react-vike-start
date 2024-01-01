import { LucideProps } from 'lucide-react'
import { lazy, Suspense } from 'react'

import { ICON_ID } from '#lib/icons/iconID'

interface AppIconProps extends LucideProps {
  icon: ICON_ID
}
const IconLazyRenderer = lazy(() => import('#lib/icons/IconLazyRenderer'))

const Icon = ({ icon, ...props }: AppIconProps) => {
  if (icon) {
    return (
      <Suspense fallback="">
        <IconLazyRenderer icon={icon} {...props} />
      </Suspense>
    )
  }
  return null
}

export default Icon
