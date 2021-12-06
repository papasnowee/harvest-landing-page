import styled from 'styled-components'

import { Size } from '@/ui/style/size'

const SVGContainer = styled.div`
  height: 42vw;
  position: absolute;
  z-index: -10;
  top: 0;
  left: 0;

  @media (max-width: ${Size.MOBILE_WIDTH + 1}px) {
    display: none;
  }
`
const SVGContainerMobile = styled.div`
  height: 222.8125vw;
  width: 100%;
  position: absolute;
  z-index: -10;
  top: 0;
  left: 0;

  @media (min-width: ${Size.MOBILE_WIDTH + 1}px) {
    display: none;
  }
`

export const Styled = {
  SVGContainer,
  SVGContainerMobile,
}
