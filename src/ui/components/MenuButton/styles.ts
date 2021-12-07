import styled from 'styled-components'

import { Size } from '@/ui/style/size'
import { Color } from '@/ui/style'

const LineWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 22px;
  height: 15px;
  cursor: pointer;

  & hover {
    box-shadow: 0px 20px 40px rgba(108, 185, 227, 0.38);
  }

  @media (min-width: ${Size.MOBILE_WIDTH + 1}px) {
    display: none;
  }
`
const Container2 = styled.div`
  width: 40px;
  height: 40px;
  position: relative;

  @media (min-width: ${Size.MOBILE_WIDTH + 1}px) {
    display: none;
  }
`

const Container = styled.button`
  all: unset;
  position: absolute;
  margin: 0 auto;
  left: 20px;
  width: 40px;
  height: 40px;
  cursor: pointer;

  @media (min-width: ${Size.MOBILE_WIDTH + 1}px) {
    display: none;
  }
`

const Line = styled.div`
  background: ${Color.white};
  height: 2.2px;
  transition: background 0.4s;
  border-radius: 1.1px;
`

export const Styled = {
  Container2,
  Container,
  LineWrapper,
  Line,
}
