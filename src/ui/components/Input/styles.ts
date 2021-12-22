import styled from 'styled-components'

import { light } from '@/ui/themes'

import type { InputProps } from './types'

export const Input = styled.input<InputProps>`
  ${(props) => {
    const { width = '100%', height = '45px', theme: { palette } = light } = props

    return `
      width: ${width};
      height: ${height};
      padding: 10px;
      background: ${palette.dropdownActive};
      border-radius: 10px;
      border: none;
      border-radius: 10px;
      color: ${palette.textDropdownActive};
      box-sizing: border-box;
      outline:none;
      
      &:focus {
        border: 1px solid ${palette.textDropdownActive};
      }
    `
  }}
`

export const Styled = {
  Input,
}
