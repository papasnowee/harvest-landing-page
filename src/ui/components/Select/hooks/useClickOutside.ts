import { RefObject, useEffect } from 'react'

export const useClickOutside = (
  wrapperRef: RefObject<HTMLElement>,
  onClickOutside: (a: boolean) => void,
): void => {
  const handleClickOutside: (e: MouseEvent) => void = (evt) => {
    const rootEl = wrapperRef?.current
    if (!rootEl) {
      return
    }

    if (!rootEl.contains(evt.target as Node)) {
      onClickOutside(false)
    }
  }

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside)

    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [])
}
