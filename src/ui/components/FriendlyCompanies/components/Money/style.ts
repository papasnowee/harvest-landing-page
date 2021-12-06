import styled from 'styled-components'

import { Size } from '@/ui/style/size'
import { Color } from '@/ui/style'

const FirstCircle = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  background: ${Color.white};
  width: 98px;
  height: 98px;
  border-radius: 50%;
  box-shadow: 3px 3px 40px rgba(14, 126, 124, 0.14);

  @media (max-width: ${Size.MOBILE_WIDTH}px) {
    width: 67px;
    height: 67px;
    box-shadow: 2.04054px 2.04054px 27.2072px rgba(14, 126, 124, 0.14);
  }
`

const SecondCircle = styled.div`
  display: flex;
  justify-content: space-evenly;
  padding-top: 15px;
  background: #e5eeed;
  width: 84px;
  height: 84px;
  border-radius: 50%;

  @media (max-width: ${Size.MOBILE_WIDTH}px) {
    padding-top: 10px;
    width: 57.14px;
    height: 57.14px;
  }
`

const SVGContainer = styled.div`
  width: 54px;
  height: 50px;

  @media (max-width: ${Size.MOBILE_WIDTH}px) {
    width: 37px;
    height: 34px;
  }
`

export const Styled = {
  SVGContainer,
  SecondCircle,
  FirstCircle,
}
