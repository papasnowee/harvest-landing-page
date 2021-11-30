import styled from 'styled-components'

import { Size } from '@/ui/style/size'

const Container = styled.div`
  boder: 1px solid black;
  width: 434px;

  @media (max-width: ${Size.MOBILE_WIDTH}px) {
    width: 312;
  }
`
const Background = styled.div`
  boder: 1px solid black;
  width: 321px;
  background: rgba(255, 255, 255, 0.4);
  border-radius: 90px 40px;

  @media (max-width: ${Size.MOBILE_WIDTH}px) {
    width: 218;
    border-radius: 61.2162px 27.2072px;
  }
`

export const Styled = {
    Container,
    Background,
}
