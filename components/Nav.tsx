import BoxElement from '#components/BoxElement'
import Icon from '#components/Icon'
import Link from '#components/Link'
import { ICON_ID } from '#lib/icons/iconID'
import { mainNavigation } from '#lib/navigation'

const Nav = () => (
  <BoxElement className="bg-opacity-25 p-8 mb-10 relative overflow-hidden justify-between md:flex items-center">
    <Icon
      icon={ICON_ID.Orbit}
      className="text-darkLight absolute h-40 w-40 left-1/2 -ml-20 top-5"
    />
    <p className=" text-light relative mb-5 md:mb-0">Test the client-side navigation {`=>`}</p>
    <ul className="flex gap-3 relative">
      {mainNavigation.map(item => (
        <li key={item.href} className="block">
          <Link className="rounded" href={item.href} button>
            {item.label}
          </Link>
        </li>
      ))}
    </ul>
  </BoxElement>
)

export default Nav
