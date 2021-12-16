import styled from 'styled-components'

import { Size } from '@/ui/style/size'
import { Color } from '@/ui/style'
import { ScrolledDown } from './Header'

const headerHeight = '126px'

const ContainerWithConstantWidth = styled.div`
  ${() => {
    return `
      display: flex;
      justify-content: space-between;
      height: ${headerHeight};
      padding-top: 32px;
      margin: 0 auto;
      width: 1160px;

      @media (max-width: ${Size.MOBILE_WIDTH}px) {
        width: 87%;
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
const CenteringWrapper = styled.div`
  height: 54px;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;

  @media (max-width: ${Size.MOBILE_WIDTH}px) {
    height: 37px;
  }
`
const Wrapper = styled.header<ScrolledDown>`
  ${(props) => {
    return `
      z-index: 2;
      width: 100%;
      top: 0;
      color: ${Color.white};
      transition: background 0.2s, color 0.2s, box-shadow 0.2s;
      margin-bottom: -${headerHeight};

      @media (max-width: ${Size.MOBILE_WIDTH}px) {
        position: fixed;
        color: ${props.scrolledDown ? Color.black : Color.white};
        ${props.scrolledDown && 'background: rgba(250, 251, 252, 0.9)'};
        ${props.scrolledDown && 'box-shadow: 4px 16px 40px rgba(39, 68, 95, 0.1)'};
      }
      
    `
  }}
`

export const Styled = {
  Wrapper,
  CenteringWrapper,
  ContainerWithConstantWidth,
  ButtonBlockWrapper,
}
