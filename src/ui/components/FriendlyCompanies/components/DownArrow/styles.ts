import styled from 'styled-components'

import { Size } from '@/ui/style/size'

const Container = styled.div``
const SVGContainer = styled.div`
  & svg {
    width: 18px;
    height: 10px;
    display: block;
  }

  @media (max-width: ${Size.MOBILE_WIDTH}px) {
    top: 102px;
    left: 82px;

    & svg {
      width: 12.16px;
      height: 6.63px;
    }
`
const OffsetSVGContainer = styled(SVGContainer)`
  margin-top: -2px;
`

export const Styled = {
  Container,
  SVGContainer,
  OffsetSVGContainer,
}
