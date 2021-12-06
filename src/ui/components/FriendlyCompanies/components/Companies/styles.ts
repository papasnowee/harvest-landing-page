import styled from 'styled-components'

import { Size } from '@/ui/style/size'
import { Color, FontWeight } from '@/ui/style'

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: ${Color.white};
  box-shadow: 2px 4px 10px rgba(10, 89, 91, 0.1);
  border-radius: 27px;
  height: 38px;
  padding-left: 8px;
  padding-right: 12px;
  font-size: 13px;
  line-height: 17px;

  color: ${Color.blackForCompany};
  font-weight: ${FontWeight.NORMAL};

  @media (max-width: ${Size.MOBILE_WIDTH}px) {
    height: 28px;
    padding-left: 6px;
    padding-right: 9px;
    border-radius: 20px;
    font-size: 9.6px;
    line-height: 12px;
  }
`

const TextContainer = styled.div`
  margin-left: 8px;

  @media (max-width: ${Size.MOBILE_WIDTH}px) {
    margin-left: 6px;
  }
`

const Circle = styled.div<{ circleColor: string }>`
  ${(props) => {
    const { circleColor } = props
    return `
    padding: 4px;
      background: ${circleColor};
      width: 26px;
      height: 26px;
      border-radius: 13px;

      @media (max-width: ${Size.MOBILE_WIDTH}px) {
        padding: 3.5px;
        width: 19px;
        height: 19px;
        border-radius: 9.5px;
      }
    `
  }}
`
export const Styled = {
  Circle,
  Container,
  TextContainer,
}
