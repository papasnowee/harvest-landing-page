import styled from 'styled-components'

import { Size } from '@/ui/style/size'

const HeaderContainer = styled.header`
  ${() => {
    return `
      border: 1px solid red;
      display: flex;
      justify-content: space-between;
      height: 126px;
      padding-top: 32px;

      @media (max-width: ${Size.MOBILE_WIDTH}px) {
        height: 63px;
        padding-top: 13px;
      }
    `
  }}
`

const ButtonBlockWrapper = styled.div`
  @media (max-width: ${Size.MOBILE_WIDTH}px) {
    display: none;
  }
`
const Wrapper = styled.div`
  border: 1px solid yellow;
  height: 54px;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;

  @media (max-width: ${Size.MOBILE_WIDTH}px) {
    height: 37px;
  }
`

export const Styled = {
  Wrapper,
  HeaderContainer,
  ButtonBlockWrapper,
}
