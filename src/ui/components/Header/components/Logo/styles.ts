import styled from 'styled-components'

import { Size } from '@/ui/style/size'
import { palette } from '@/ui/style'

const LogoSvgWrapper = styled.i`
  & svg {
    width: 24px;
    height: 24px;
  }

  @media (min-width: ${Size.DESKTOP_WIDTH}) {
    & svg {
      width: 37px;
      height: 37px;
    }
`

const LogoImgWrapper = styled.span`
  ${() => {
    return `
      @media (max-width: 399.99px) {
        visibility: hidden;
      }
      display: flex;
      justify-content: center;
      align-items: center;
      background: ${palette.logo};
      height: 50px;
      width: 50px;
      margin: 0 10px 0 0;
      padding: 0;
      border-radius: 7px;
      box-sizing: border-box;
    `
  }}
`

export const Styled = {
  LogoImgWrapper,
  LogoSvgWrapper,
}
