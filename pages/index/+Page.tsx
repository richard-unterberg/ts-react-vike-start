import BoxElement from '#components/BoxElement'
import { BoxHeadline } from '#components/BoxHeadline'
import CodeElement from '#components/CodeElement'
import Icon from '#components/Icon'
import Link from '#components/Link'
import Popover from '#components/Popover'
import useAppTheme from '#hooks/useTheme'
import { ICON_ID } from '#lib/icons/iconID'

const LinkElement = ({ children, href }: { children: React.ReactNode; href: string }) => {
  const { spacing } = useAppTheme()
  return (
    <Link
      className="underline underline-offset-3 items-center inline-flex gap-0.5"
      href={href}
      external
    >
      {children}
      <Icon
        icon={ICON_ID.ExternalLink}
        className="inline-block align-super mr-1"
        size={spacing(2.5)}
      />
    </Link>
  )
}

const StartPage = () => {
  const { color, spacing } = useAppTheme()
  return (
    <div className="relative container px-5 mx-auto text-white text-base max-w-4xl">
      <Popover>
        <Link
          aria-label="to-github"
          href="https://github.com/richard-unterberg/ts-react-vike-start"
          external
        >
          <Icon icon={ICON_ID.Github} size={spacing(10)} />
        </Link>
      </Popover>

      <div className="xs:block md:flex gap-3 mt-16 my-10 items-center">
        <Icon
          icon={ICON_ID.MagnetIcon}
          color={color('warning')}
          className="mx-auto mb-4 md:mx-0 "
          size={spacing(24)}
        />
        <div className="text-center md:text-left">
          <p className="mb-5 font-mono">ts-react-vike-start</p>
          <h1 className="text-3xl mb-2 font-bold" id="typescript--react--vite">
            TypeScript + React + Vike
          </h1>
          <h2 className="font-normal mb-6" id="feat-tailwind-css--eslint--prettier">
            Tailwind CSS + ESLint + Prettier
          </h2>
        </div>
      </div>
      <p className="mb-10">
        An SSR-ready vite-react starter with vike and my usual friends tailwind and lucide-icons 😙.
      </p>
      <p className="font-bold mb-4">Preconditions:</p>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mb-10">
        <BoxElement>npm or yarn</BoxElement>
        <BoxElement>
          <LinkElement href="https://marketplace.visualstudio.com/items?itemName=EditorConfig.EditorConfig">
            editorconfig
          </LinkElement>
          vs code extension
        </BoxElement>
        <BoxElement>
          <LinkElement href="https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode">
            prettier
          </LinkElement>
          vs code extension
        </BoxElement>
        <BoxElement>
          <LinkElement href="https://marketplace.visualstudio.com/items?itemName=bradlc.vscode-tailwindcss">
            tailwindcss
          </LinkElement>
          vs code extension
        </BoxElement>
      </div>

      <p className="font-bold mb-4">Features:</p>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-3 mb-10">
        <BoxElement>
          <span>👏 </span>
          <LinkElement href="https://github.com/facebook/react">React</LinkElement> +{' '}
          <LinkElement href="https://github.com/vikejs/vike">Vike</LinkElement>
        </BoxElement>
        <BoxElement>
          <span>🎨 </span>
          <LinkElement href="https://github.com/tailwindlabs/tailwindcss">Tailwind CSS</LinkElement>
        </BoxElement>
        <BoxElement>
          ✍️ <LinkElement href="https://github.com/fontsource/fontsource">@fontsource</LinkElement>
        </BoxElement>
        <BoxElement>
          <span>🎛️ </span> Custom Theme Hook
        </BoxElement>
        <BoxElement>
          <span>💫 </span>{' '}
          <LinkElement href="https://github.com/lucide-icons/lucide">lucide-react</LinkElement>{' '}
          icons
        </BoxElement>
        <BoxElement>
          <span>🤌 </span> Strict{' '}
          <LinkElement href="https://github.com/eslint/eslint">eslint</LinkElement> setup
        </BoxElement>
        <BoxElement>
          <span>💄 </span>
          <LinkElement href="https://github.com/prettier/prettier">Prettier</LinkElement> +{' '}
          <LinkElement href="https://github.com/trivago/prettier-plugin-sort-imports">
            Prettier Sort Imports
          </LinkElement>
        </BoxElement>
        <BoxElement>
          <span>🚨 </span>
          <LinkElement href="https://github.com/typicode/husky">Husky</LinkElement> +{' '}
          <LinkElement href="https://github.com/lint-staged/lint-staged">lint-staged</LinkElement>
        </BoxElement>
        <BoxElement>
          <span>⚙️ </span>
          <LinkElement href="https://github.com/editorconfig/editorconfig">
            editorconfig
          </LinkElement>
        </BoxElement>
        <BoxElement>
          <span>🚓 </span>
          <LinkElement href="https://github.com/microsoft/TypeScript">Typescript</LinkElement>
        </BoxElement>
      </div>
      <h2 className="text-3xl mb-4" id="usage">
        Usage
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <BoxElement>
          <BoxHeadline>
            Installation
            <Icon icon={ICON_ID.MonitorDown} color={color('grayDark')} />
          </BoxHeadline>
          <p>
            clone repo and: <br />
            run <CodeElement>npm install</CodeElement> in root
          </p>
        </BoxElement>
        <BoxElement>
          <BoxHeadline>
            Local Dev <Icon icon={ICON_ID.PencilRuler} color={color('grayDark')} />
          </BoxHeadline>
          <p>
            Start local dev server with <br />
            <CodeElement>npm run dev</CodeElement>
          </p>
        </BoxElement>
        <BoxElement>
          <BoxHeadline>
            Build <Icon icon={ICON_ID.Sailboat} color={color('grayDark')} />
          </BoxHeadline>
          <p>
            build production ready copy to <span className="font-mono">dist</span> folder:
            <br />
            <CodeElement>npm run build</CodeElement>
          </p>
        </BoxElement>
        <BoxElement>
          <BoxHeadline>
            Preview <Icon icon={ICON_ID.PackageCheck} color={color('grayDark')} />
          </BoxHeadline>
          <p>
            Preview the build from <span className="font-mono">dist</span> folder: <br />
            <CodeElement>npm run preview</CodeElement>
          </p>
        </BoxElement>
      </div>
      <div className="mb-20 mt-20 text-small text-center">
        <div className="w-1/2 mb-10 border-grayDark h-1 border-dotted border-b-2 mx-auto" />
        <LinkElement href="https://github.com/richard-unterberg/vike-starter">
          ⭐️ https://github.com/richard-unterberg/vike-starter
        </LinkElement>
      </div>
    </div>
  )
}

export default StartPage
