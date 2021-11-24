import styled from 'styled-components'

import { light } from '@/ui/themes'
import { getTextStyle } from '@/ui/typography/utils/style'
import { TextKind } from '@/ui/style/types'
import { Icon } from '@/ui/Icon'

import { ChevronType, CurrentValueType, DropdownType } from './types'

const Wrapper = styled.div(() => {
  return `
    position: relative;
  `
})

const CurrentValue = styled.button<CurrentValueType>((props) => {
  const { theme = light, isActive } = props
  const { palette } = theme

  const color = isActive ? palette.textDropdownActive : palette.textDropdown
  const backgroundColor = isActive
    ? palette.dropdownActive
    : palette.dropdownSurface

  return `
    display: flex;
    justify-content: space-between;
    align-items: center;
    min-width: 80px;
    padding: 10px;
    ${getTextStyle(theme, TextKind.OPTION, false)}
    color: ${color};
    background-color: ${backgroundColor};
    border: none;
    border-radius: 10px;
    box-shadow: none;
    transition: background-color .2s linear, color .2s linear;
    cursor: pointer;
    
    &:hover,
    &:focus {
      color: ${palette.textDropdownActive};
      background-color: ${palette.dropdownActive};
      outline: none;
    }
  `
})

const Dropdown = styled.div<DropdownType>((props) => {
  const SCROLLER_HEIGHT = 25

  const {
    theme = light,
    isActive,
    itemHeight,
    scrolled,
    itemsLength,
    itemsDisplayed,
  } = props
  const { palette } = theme
  const opacity = isActive ? 1 : 0
  const pointerEvents = isActive ? 'all' : 'none'

  const scrollerHeightAdjust = itemHeight - SCROLLER_HEIGHT
  const scale =
    (itemHeight * itemsDisplayed - scrollerHeightAdjust) /
    (itemHeight * itemsLength)

  const top = scale * scrolled + scrollerHeightAdjust / 2

  return `
    position: absolute;
    bottom: 0;
    left: 0;
    opacity: ${opacity};
    width: 100%;
    background-color: ${palette.dropdownSurface};
    border-radius: 10px;
    overflow: hidden;
    transform: translateY(calc(100% + 4px));
    transition: opacity .2s linear;
    pointer-events: ${pointerEvents};
    
    ul {
      margin: 0;
      padding: 0;
      list-style: none;
      max-height: ${itemHeight * itemsDisplayed}px;
      overflow-y: auto;
      overflow-x: hidden;
      
      li {
        display: flex;
        color: ${palette.textDropdown};
        
        &:hover {
          color: ${palette.textDropdownActive};
          background-color: ${palette.dropdownActive};
        }
      }
      
      &::before {
        ${itemsLength <= itemsDisplayed ? '' : 'content: "";'}
        position: absolute;
        top: ${top}%;
        right: 6px;
        width: 2px;
        height: ${SCROLLER_HEIGHT}px;
        border-radius: 1px;
        background-color: ${palette.dropdownControls};
      }
      
      &::-webkit-scrollbar {
        display: none;
      }
    }
    
    button {
      width: 100%;
      margin: 0;
      padding: 8px 10px;
      box-shadow: none;
      border: none;
      line-height: 20px;
      text-align: left;
      background-color: inherit;
      color: inherit;
      cursor: pointer;
      
      &:focus {
        outline: none;
      }
    }
  `
})

const Chevron = styled(Icon)<ChevronType>((props) => {
  const { isActive } = props

  return `
    margin-left: 5px;
    transform: rotate(${isActive ? 0 : 180}deg);
    transition: transform .2s linear;
  `
})

export const Styled = {
  CurrentValue,
  Dropdown,
  Chevron,
  Wrapper,
}
