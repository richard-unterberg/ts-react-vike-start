import Icon from '#components/Icon'
import Link from '#components/Link'
import { ICON_ID } from '#lib/icons/iconID'

const LinkElement = ({ children, href }: { children: React.ReactNode; href: string }) => (
  <Link
    className="underline underline-offset-3 items-center inline-flex gap-0.5"
    href={href}
    external
  >
    {children}
    <Icon icon={ICON_ID.ExternalLink} className="inline-block align-super mr-1" size={10} />
  </Link>
)

export default LinkElement
