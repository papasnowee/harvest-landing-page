import styled from 'styled-components'

import { light } from '@/ui/themes'

import type { StyledProps } from './types'

const Wrapper = styled.div<StyledProps>`
  ${(props) => {
    const { theme: { palette } = light } = props

    return `
      width: 100%;
      min-width: 300px;
      height: 100%;
      min-height: 300px;
      padding: 20px;
      background: ${palette.surface};
    `
  }}
`
export const Styled = {
  Wrapper,
}
