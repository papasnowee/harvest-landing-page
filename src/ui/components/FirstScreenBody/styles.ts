import styled from 'styled-components'

import { Size } from '@/ui/style/size'
import { Color, FontWeight } from '@/ui/style'

const Container = styled.div`
  margin-top: 157px;
  border: 1px solid black;

  @media (max-width: ${Size.MOBILE_WIDTH}px) {
    display: none;
  }
  width: 1175px;
`
const LeftBlock = styled.div`
  border: 1px solid black;
  width: 632px;
`
const MainTextContainer = styled.div`
  border: 1px solid black;
  font-weight: ${FontWeight.BOLD};
  font-size: 52px;
  color: ${Color.white};
  line-height: 68px;
  margin-bottom: 29px;
`
const CaptionContainer = styled.div`
  border: 1px solid black;
  font-weight: ${FontWeight.NORMAL};
  font-size: 20px;
  color: ${Color.white};
  line-height: 36px;
  margin-bottom: 34px;
`

export const Styled = {
  Container,
  LeftBlock,
  CaptionContainer,
  MainTextContainer,
}
