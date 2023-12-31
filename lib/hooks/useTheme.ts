import { useCallback, useMemo } from 'react'
import tw from 'tailwindcss/defaultTheme'

import twConfig from '#root/tailwind.config'

const { theme: twTheme } = twConfig

/** custom hook to retrieve data from the tailwind config from root */
const useAppTheme = () => {
  const theme = useMemo(() => twTheme, [])

  const color = useCallback(
    (key: string) => theme.colors[key as keyof typeof theme.colors],
    [theme],
  ) as (key: string) => string

  const spacing = useCallback((key: number) => {
    const number = `${key}` as keyof typeof tw.spacing
    return tw.spacing[number]
  }, [])

  return { spacing, color }
}

export default useAppTheme
