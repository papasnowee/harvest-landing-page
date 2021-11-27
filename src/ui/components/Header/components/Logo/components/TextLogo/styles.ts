import styled from 'styled-components'

import { Color, FontWeight } from '@/ui/style'
import { Size } from '@/ui/style/size'

const Wrapper = styled.div`
  ${() => {
    return `
        @media(max-width: ${Size.MOBILE_WIDTH}px) {
        display: none;
        }

        color: ${Color.white};
        font-weight: ${FontWeight.BOLD};
        font-size: 28px;
        line-height: 50px;
  `
  }}
`

export const Styled = {
  Wrapper,
}
