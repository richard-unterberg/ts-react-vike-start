import { theme } from '@unocss/preset-wind'
import { useCallback, useMemo } from 'react'

import unoConfig from '#root/uno.config'

/** custom hook to retrieve data from the tailwind config from root */
const useAppTheme = () => {
  const localTheme = useMemo(() => unoConfig.theme, [])

  const color = useCallback(
    (key: string) => localTheme?.colors?.[key as keyof typeof localTheme.colors],
    [localTheme],
  ) as (key: string) => string

  const spacing = useCallback((key: number) => {
    const number = `${key}` as keyof typeof theme.spacing
    return theme?.spacing?.[number]
  }, [])

  return { spacing, color }
}

export default useAppTheme
