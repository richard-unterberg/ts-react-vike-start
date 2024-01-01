import type { OnPageTransitionStartAsync } from 'vike/types'

const onPageTransitionStart: OnPageTransitionStartAsync =
  async (): ReturnType<OnPageTransitionStartAsync> => {
    // eslint-disable-next-line no-console
    console.log('Page transition start')
    document.querySelector('body')!.classList.add('page-is-transitioning')
  }

export default onPageTransitionStart
