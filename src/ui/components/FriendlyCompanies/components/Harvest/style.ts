import styled from 'styled-components'

import { Size } from '@/ui/style/size'
import { Color, FontWeight } from '@/ui/style'

const FirstCircle = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  background: rgba(255, 255, 255, 0.1);
  width: 144px;
  height: 144px;
  border-radius: 50%;

  @media (max-width: ${Size.MOBILE_WIDTH}px) {
    width: 97.95px;
    height: 97.95px;
  }
`

const SecondCircle = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  background: rgba(255, 255, 255, 0.16);
  width: 126px;
  height: 126px;
  border-radius: 50%;

  @media (max-width: ${Size.MOBILE_WIDTH}px) {
    width: 85.7px;
    height: 85.7px;
  }
`

const ThirdCircle = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background: ${Color.yellow};
  width: 104px;
  height: 104px;
  border-radius: 50%;

  @media (max-width: ${Size.MOBILE_WIDTH}px) {
    width: 70.74px;
    height: 70.74px;
  }
`
const SVGContainer = styled.div`
  width: 33px;
  height: 33px;
  margin-top: 28px;

  @media (max-width: ${Size.MOBILE_WIDTH}px) {
    width: 22.56px;
    height: 22.56px;
    margin-top: 19px;
  }
`

const TextContainer = styled.div`
  font-weight: ${FontWeight.NORMAL};
  font-size: 13.4483px;
  line-height: 17px%;
  margin-top -1px;

  @media (max-width: ${Size.MOBILE_WIDTH}px) {
    font-size: 9px;
    line-height: 12px%;
  }
`

export const Styled = {
    TextContainer,
    SVGContainer,
    ThirdCircle,
    SecondCircle,
    FirstCircle,
}
