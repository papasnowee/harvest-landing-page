import styled from 'styled-components'

import { getButtonStyle } from './utils'
import { FontWeight } from '@/ui/style'
import { Size } from '@/ui/style/size'

import { ButtonProps } from './types'

const Button = styled.button<ButtonProps & { isClicked: boolean }>`
  ${(props) => {
    return `
      padding: 0;
      border: 0;
      width: ${props.width};
      height: 65px;
      border-radius: 10px;
      cursor: pointer;
      border-radius: 8px;
      font-weight: ${FontWeight.BOLD};
      font-size: 16px;
      line-height: 65px;
      transition: background 0.2s;

      @media (max-width: ${Size.MOBILE_WIDTH + 1}px) {
        width: ${props.mobileWidth};
        height: 54px;
        font-size: 14px;
        line-height: 25px;
      }

      ${getButtonStyle(props)}
    `
  }}
`

export const Styled = {
  Button,
}
