import styled from 'styled-components'

import { Size } from '@/ui/style/size'

const SVGContainer = styled.div<{ circleColor?: string }>`
  ${(props) => {
    const { circleColor } = props
    return `
  height: ${circleColor ? '17px' : '26px'};
  width: ${circleColor ? '17px' : '26px'};

  & svg {
    display: block;
    height: ${circleColor ? '17px' : '26px'};
    width: ${circleColor ? '17px' : '26px'};
  }

  @media (max-width: ${Size.MOBILE_WIDTH}px) {
    height: ${circleColor ? '12px' : '19px'};
    width: ${circleColor ? '12px' : '19px'};

    & svg {
      height: ${circleColor ? '12px' : '19px'};
      width: ${circleColor ? '12px' : '19px'};
    }
  }
  `
  }}
`

export const Styled = {
  SVGContainer,
}
