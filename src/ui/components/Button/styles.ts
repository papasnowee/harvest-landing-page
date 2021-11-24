import styled from 'styled-components'

import { ICON_BOX_CLASSNAME } from '@/ui/Button/constants'
import { getTextStyle } from '@/ui/typography/utils/style'
import { getButtonBackground, getButtonColor } from './utils'
import { TextKind } from '@/ui/style/types'
import { light } from '@/ui/themes'

import { ButtonKind, IconBoxProps, StyledButtonProps } from './types'

const Button = styled.button<StyledButtonProps>`
  ${(props) => {
    const {
      theme = light,
      inverted,
      isHasChildren,
      kind = ButtonKind.COMMON,
    } = props
    const { palette } = theme

    const textKind =
      kind === ButtonKind.COMMON ? TextKind.TEXT_MAIN : TextKind.BUTTON_ACCENT
    const minWidth = isHasChildren ? '125px' : 'unset'

    const onHoverIconBoxBackgroundColor = inverted
      ? palette.surface
      : palette.active
    const onHoverIconFill = inverted ? palette.active : palette.primary
    const onHoverIconColor = inverted ? palette.active : palette.primary

    return `
      display: flex;
      justify-content: flex-start;
      align-items: center;
      min-width: ${minWidth};
      min-height: 48px;
      padding: 5px;    
      box-shadow: none;  
      border: none;
      border-radius: 10px;
      background-color: ${getButtonBackground({ kind, inverted }, palette)};
      color: ${getButtonColor({ kind, inverted }, palette)};
      cursor: pointer;
      ${getTextStyle(theme, textKind, false)}
      
      &:hover .${ICON_BOX_CLASSNAME} {
        background-color: ${onHoverIconBoxBackgroundColor};
        svg {
          fill: ${onHoverIconFill};
          color: ${onHoverIconColor};
        }
      }
    `
  }}
`

const TextWrapper = styled.span`
  ${() => {
    return `
      display: flex;
      justify-content: center;
      align-items: center;
      flex-grow: 1;
      padding: 0 5px;
    `
  }}
`

const IconBox = styled.span<IconBoxProps>`
  ${(props) => {
    const { theme: { palette } = light, inverted, isHasChildren } = props
    const backgroundColor = inverted
      ? palette.invertLighter
      : palette.buttonIcon
    const fill = inverted ? palette.surface : palette.buttonText
    const color = inverted ? palette.surface : palette.buttonText

    return `
      display: flex;
      align-items: center;
      justify-content: center;
      flex-shrink: 0;
      width: 38px;
      height: 38px;
      margin-right: ${isHasChildren ? '5px' : 0};
      background-color: ${backgroundColor};
      border-radius: 10px;
      
      svg {
        fill: ${fill};
        color: ${color};
      }
    `
  }}
`

export const Styled = {
  Button,
  TextWrapper,
  IconBox,
}
