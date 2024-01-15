import BoxElement from '#components/BoxElement'
import LinkElement from '#components/LinkElement'

const Page = () => (
  <>
    <h2 className="text-3xl mb-4" id="usage">
      Preconditions
    </h2>
    <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mb-10">
      <BoxElement>npm, pnpm or yarn</BoxElement>
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
        <LinkElement href="https://unocss.dev/integrations/vscode">unocss</LinkElement>
        vs code extension
      </BoxElement>
    </div>

    <h2 className="mb-4 text-3xl" id="usage">
      Features
    </h2>
    <div className="grid grid-cols-2 mb-10 gap-3 md:grid-cols-3">
      <BoxElement>
        <span>👏 </span>
        <LinkElement href="https://github.com/facebook/react">React</LinkElement> +{' '}
        <LinkElement href="https://github.com/vikejs/vike">Vike</LinkElement>
      </BoxElement>
      <BoxElement>
        <span>🎨 </span>
        <LinkElement href="https://github.com/unocss/unocss">Uno CSS</LinkElement>
      </BoxElement>
      <BoxElement>
        ✍️ <LinkElement href="https://github.com/fontsource/fontsource">@fontsource</LinkElement>
      </BoxElement>
      <BoxElement>
        <span>🎛️ </span> Custom Theme Hook
      </BoxElement>
      <BoxElement>
        <span>💫 </span>{' '}
        <LinkElement href="https://github.com/lucide-icons/lucide">lucide-react</LinkElement> icons
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
        <LinkElement href="https://github.com/editorconfig/editorconfig">editorconfig</LinkElement>
      </BoxElement>
      <BoxElement>
        <span>🚓 </span>
        <LinkElement href="https://github.com/microsoft/TypeScript">Typescript</LinkElement>
      </BoxElement>
      <BoxElement>
        <span>🌊 </span>
        <LinkElement href="https://github.com/brillout/react-streaming">
          React 18 Streaming
        </LinkElement>{' '}
        enabled
      </BoxElement>
    </div>
  </>
)

export default Page
