import styled from 'styled-components'

import { getButtonStyle } from './utils'

import { ButtonProps } from './types'

const Button = styled.button<ButtonProps>`
  ${(props) => {
    return `
      display: flex;
      justify-content: flex-start;
      align-items: center;
      min-height: 48px;
      padding: 5px;    
      box-shadow: none;  
      border: none;
      border-radius: 10px;
      cursor: pointer;
      ${getButtonStyle(props)}

      
      &:hover {
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

export const Styled = {
  Button,
  TextWrapper,
}
