import styled from 'styled-components'

import { getButtonStyle } from './utils'
import { FontWeight } from '@/ui/style'

import { ButtonProps } from './types'

const Button = styled.button<ButtonProps>`
  ${(props) => {
    return `
      width: ${props.width};
      height: 65px;
      border-radius: 10px;
      cursor: pointer;
      border-radius: 8px;
      font-weight: ${FontWeight.BOLD};
      font-size: 16px;
      line-height: 65px;
      ${getButtonStyle(props)}

      
      &:hover {
      }
    `
  }}
`

export const Styled = {
  Button,
}
