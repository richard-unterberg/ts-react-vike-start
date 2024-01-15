import Icon from '#components/Icon'
import Link from '#components/Link'
import Nav from '#components/Nav'
import Popover from '#components/Popover'
import { ICON_ID } from '#lib/icons/iconID'

const Header = () => (
  <div>
    <Popover>
      <Link
        aria-label="to-github"
        href="https://github.com/richard-unterberg/ts-react-vike-start"
        external
      >
        <Icon icon={ICON_ID.Github} size={32} className="text-dark" />
      </Link>
    </Popover>

    <div className="xs:block md:flex gap-6 mt-16 my-10 items-center">
      <Icon icon={ICON_ID.MagnetIcon} className="mx-auto mb-4 md:mx-0 text-warning" size={96} />
      <div className="text-center md:text-left">
        <p className="mb-5 font-mono">ts-react-vike-start</p>
        <h1 className="text-2xl md:text-3xl mb-2 font-bold" id="typescript--react--vite">
          React + Vike + TS
        </h1>
        <h2 className="font-normal mb-6" id="feat-tailwind-css--eslint--prettier">
          Tailwind CSS + ESLint + Prettier
        </h2>
      </div>
    </div>
    <p className="mb-10">
      Just another SSR-ready vite-react starter template with some sugar from my usual friends
      tailwind, lucide-icons and a strict linting setup. React 18 Streaming enabled (Server /
      Client) 🌊
    </p>
    <Nav />
  </div>
)

export default Header
