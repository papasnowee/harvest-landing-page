import styled from 'styled-components'

import { light } from '@/ui/themes'

import type { StyledPaperProps } from './types'

export const Paper = styled.div<StyledPaperProps>`
  ${(props) => {
    const {
      width = 'auto',
      height = 'auto',
      theme: { palette } = light,
    } = props

    return `
      width: ${width};
      height: ${height};
      padding: 20px;
      background: ${palette.paper};
      border-radius: 10px;
      box-sizing: border-box;
    `
  }}
`

export const Styled = {
  Paper,
}
