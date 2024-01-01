import type { OnPageTransitionEndAsync } from 'vike/types'

const onPageTransitionEnd: OnPageTransitionEndAsync =
  async (): ReturnType<OnPageTransitionEndAsync> => {
    // eslint-disable-next-line no-console
    console.log('Page transition end')
    document.querySelector('body')!.classList.remove('page-is-transitioning')
  }

export default onPageTransitionEnd
