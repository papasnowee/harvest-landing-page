import styled from 'styled-components'

import { Size } from '@/ui/style/size'
import { Color, FontWeight } from '@/ui/style'

const ContainerWeb = styled.div`
  border: 1px solid yellow;
  display: flex;
  justify-content: space-between;
  margin-top: 157px;
  width: 1175px;

  @media (max-width: ${Size.MOBILE_WIDTH + 1}px) {
    display: none;
  }
`

const ContainerMobile = styled.div`
  border: 1px solid yellow;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin-top: 95px;

  @media (min-width: ${Size.MOBILE_WIDTH + 1}px) {
    display: none;
  }
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

const MainTextContainerMobile = styled.div`
  height: 126px;
  text-align: center;
  font-weight: ${FontWeight.BOLD};
  font-size: 32px;
  color: ${Color.white};
  line-height: 42px;
`

const CaptionContainer = styled.div`
  border: 1px solid black;
  font-weight: ${FontWeight.NORMAL};
  font-size: 20px;
  color: ${Color.white};
  line-height: 36px;
  margin-bottom: 34px;
`
const CaptionContainerMobile = styled.div`
  border: 1px solid black;
  font-weight: ${FontWeight.NORMAL};
  font-size: 14px;
  color: ${Color.white};
  line-height: 25px;
  margin: 18px 0 23px 0;
`

export const Styled = {
  CaptionContainerMobile,
  MainTextContainerMobile,
  ContainerMobile,
  ContainerWeb,
  LeftBlock,
  CaptionContainer,
  MainTextContainer,
}
