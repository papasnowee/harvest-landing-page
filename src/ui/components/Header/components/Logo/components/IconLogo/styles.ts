import styled from 'styled-components'

import { Size } from '@/ui/style/size'

const LogoImgWrapper = styled.span`
  ${() => {
    return `
    @media(min-width: ${Size.MOBILE_WIDTH + 1}px) {
      display: none;
     }

    padding-top: 13px;
    `
  }}
`

export const Styled = {
  LogoImgWrapper,
}
