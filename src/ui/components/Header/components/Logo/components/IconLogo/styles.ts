import styled from 'styled-components'

import { Size } from '@/ui/style/size'

const LogoImgWrapper = styled.div`
  ${() => {
    return `

    & svg {
    width: 37px;
    height: 37px;
    display: block;
    }
    
    @media(min-width: ${Size.MOBILE_WIDTH + 1}px) {
      display: none;
     }
    `
  }}
`

export const Styled = {
  LogoImgWrapper,
}
