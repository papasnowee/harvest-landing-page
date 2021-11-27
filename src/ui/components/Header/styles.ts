import styled from 'styled-components'

import { Size } from '@/ui/style/size'

const HeaderContainer = styled.header`
  ${() => {
    return `
      border: 1px solid black;
      display: flex;
      justify-content: space-between;
    `
  }}
`

const ButtonBlockWrapper = styled.div`
  margin-top: 44px;

  @media (max-width: ${Size.MOBILE_WIDTH}px) {
    display: none;
  }
`
const LogoWrapper = styled.div`
  margin-top: 34px;

  @media (max-width: ${Size.MOBILE_WIDTH}px) {
    margin-top: 13px;
  }
`
export const Styled = {
  LogoWrapper,
  HeaderContainer,
  ButtonBlockWrapper,
}
