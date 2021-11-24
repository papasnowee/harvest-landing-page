import styled from 'styled-components'

import { IconProps } from '@/ui/components/Icon/types'

export const SVGBox = styled.i<Omit<IconProps, 'iconName'>>`
  ${({ color, width = '18px', height = '18px', rotate = 0 }) => {
    return `
      display: flex;
      align-items: center;
      justify-content: center;
      width: ${width};
      height: ${height};
      color: ${color};
      transform: rotate(${rotate}deg);
      
      svg {
        fill: ${color};
      }
    `
  }}
`

export const Styled = {
  SVGBox,
}
