import { useEffect, useRef, useState } from 'react'

export const useRefs = (setActive: (f: boolean) => void) => {
  const [firstItemHeight, setFirstItemHeight] = useState(0)
  const [dropdownScrollTop, setDropdownScrollTop] = useState(0)

  const wrapperRef = useRef<HTMLDivElement>(null)
  const dropDownRef = useRef<HTMLUListElement>(null)
  const firstItemRef = useRef<HTMLLIElement>(null)

  useEffect(() => {
    const firstItem = firstItemRef?.current

    if (firstItem) {
      setFirstItemHeight(firstItem.clientHeight)
    }
  }, [firstItemRef])

  useEffect(() => {
    const dropDown = dropDownRef?.current

    if (dropDown) {
      dropDown.addEventListener('scroll', (evt) => {
        evt.currentTarget &&
          setDropdownScrollTop(
            (evt?.currentTarget as HTMLUListElement).scrollTop,
          )
      })

      dropDown.addEventListener('mouseleave', () => {
        setActive(false)
      })
    }
  }, [dropDownRef])

  return {
    wrapperRef,
    dropDownRef,
    firstItemRef,
    firstItemHeight,
    dropdownScrollTop,
  }
}
