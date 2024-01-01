import BoxElement from '#components/BoxElement'
import { BoxHeadline } from '#components/BoxHeadline'
import CodeElement from '#components/CodeElement'
import Icon from '#components/Icon'
import useAppTheme from '#hooks/useTheme'
import { ICON_ID } from '#lib/icons/iconID'

const StartPage = () => {
  const { color } = useAppTheme()
  return (
    <>
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
    </>
  )
}

export default StartPage
