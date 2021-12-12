import styled from 'styled-components'

import { Size } from '@/ui/style/size'

const SVGContainer = styled.div`
  position: absolute;
  z-index: -10;
  top: 0;
  left: 0;

  & svg {
    height: ${Size.MAIN_PICTURE_HEIGHT};
    width: 100%;
  }

  @media (max-width: ${Size.MOBILE_WIDTH + 1}px) {
    display: none;
  }
`
const SVGContainerMobile = styled.div`
  height: ${Size.MAIN_PICTURE_HEIGHT_MOBILE};
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
