import React, { FC, useState } from 'react'

import { light } from '@/ui/themes'
import { IconName } from '@/ui/Icon'
import { Styled } from './styles'
import { useClickOutside, useRefs } from './hooks'

import { SelectProps } from './types'

export const Select: FC<SelectProps> = (props) => {
  const {
    theme: { palette } = light,
    defaultValue = '--',
    options,
    itemsDisplayed = 3,
    onChange,
  } = props

  const [active, setActive] = useState(false)
  const [currentValue, setValue] = useState(defaultValue)

  const handleChange = (value: string): void => {
    setValue(value)
    setActive(false)

    if (typeof onChange === 'function') {
      onChange(value)
    }
  }

  const {
    wrapperRef,
    dropDownRef,
    firstItemRef,
    firstItemHeight,
    dropdownScrollTop,
  } = useRefs(setActive)
  useClickOutside(wrapperRef, setActive)

  return (
    <Styled.Wrapper ref={wrapperRef}>
      <Styled.CurrentValue
        isActive={active}
        onClick={() => {
          setActive(!active)
        }}
      >
        <span>{currentValue}</span>
        <Styled.Chevron
          iconName={IconName.CHEVRON}
          width={'10px'}
          height={'6px'}
          isActive={active}
          color={palette.dropdownControls}
        />
      </Styled.CurrentValue>
      <Styled.Dropdown
        isActive={active}
        itemHeight={firstItemHeight}
        itemsLength={options.length}
        scrolled={dropdownScrollTop}
        itemsDisplayed={itemsDisplayed}
      >
        <ul ref={dropDownRef}>
          {options.map((option, idx) => {
            const itemProps = idx === 0 ? { ref: firstItemRef } : {}

            return (
              <li key={option + idx} {...itemProps}>
                <button onClick={() => handleChange(option)}>{option}</button>
              </li>
            )
          })}
        </ul>
      </Styled.Dropdown>
    </Styled.Wrapper>
  )
}
