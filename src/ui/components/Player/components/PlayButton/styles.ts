import styled from 'styled-components'

import { Size } from '@/ui/style/size'
import { Color } from '@/ui/style'

const Circle1 = styled.div`
  height: 200px;
  width: 200px;
  border-radius: 50%;
  background: rgba(255, 255, 255, 0.08);
  display: flex;
  justify-content: space-evenly;
  align-items: center;

  @media (max-width: ${Size.MOBILE_WIDTH}px) {
    height: 96px;
    width: 96px;
  }
`

const Circle2 = styled.div`
  height: 160px;
  width: 160px;
  border-radius: 50%;
  background: rgba(255, 255, 255, 0.2);
  display: flex;
  justify-content: space-evenly;
  align-items: center;

  @media (max-width: ${Size.MOBILE_WIDTH}px) {
    height: 76.8px;
    width: 76.8px;
  }
`

const Circle3 = styled.div`
  height: 116px;
  width: 116px;
  border-radius: 50%;
  background: ${Color.white};
  display: flex;
  justify-content: space-evenly;
  align-items: center;

  @media (max-width: ${Size.MOBILE_WIDTH}px) {
    height: 55.68px;
    width: 55.68px;
  }
`

const SVGContainer = styled.div`
  svg {
    display: block;
    height: 21px;
    width: 26px;
    @media (max-width: ${Size.MOBILE_WIDTH}px) {
      height: 12.56px;
      width: 12.55px;
    }
  }
`

export const Styled = {
    SVGContainer,
    Circle1,
    Circle2,
    Circle3,
}
