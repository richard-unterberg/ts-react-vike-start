import Link from '#components/Link'
import useTheme from '#hooks/useTheme'

const Page = () => {
  const { color } = useTheme()

  return (
    <>
      <h1 className="font-bold text-3xl pb-4">My Vike app</h1>
      This page is:
      <ul>
        <li>Rendered to HTML.</li>
        <li style={{ color: color('primary') }}>Interactive.</li>
        <Link href="/about">Helloowww</Link>
      </ul>
    </>
  )
}

export default Page
