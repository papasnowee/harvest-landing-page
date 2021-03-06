import styled from 'styled-components'

import { Size } from '@/ui/style/size'
import { Color, FontWeight } from '@/ui/style'

const ContainerWeb = styled.div`
  display: flex;
  justify-content: space-between;
  padding-top: ${Size.FIRST_SCREEN_MARGIN_TOP}px;
  width: 1175px;
  // this is necessary so that all the components under the main picture do not climb onto the main picture.
  height: calc(${Size.MAIN_PICTURE_HEIGHT} + 100px - ${Size.MAIN_PAGE_OFFSET}px);

  @media (max-width: ${Size.MOBILE_WIDTH + 1}px) {
    display: none;
  }
`

const ContainerMobile = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: ${Size.FIRST_SCREEN_MARGIN_TOP_MOBILE}px;
  // this is necessary so that all the components under the main picture do not climb onto the main picture.
  height: calc(${Size.MAIN_PICTURE_HEIGHT_MOBILE} + 30px);

  @media (min-width: ${Size.MOBILE_WIDTH + 1}px) {
    display: none;
  }
`

const LeftBlock = styled.div`
  padding-top: 25px;
  width: 632px;
`
const MainTextContainer = styled.div`
  font-weight: ${FontWeight.BOLD};
  font-size: 82px;
  color: ${Color.white};
  line-height: 88px;
  margin-bottom: 29px;
`

const MainTextContainerMobile = styled.div`
  text-align: center;
  font-weight: ${FontWeight.BOLD};
  font-size: 32px;
  color: ${Color.white};
  line-height: 42px;
`

const CaptionContainer = styled.div`
  font-weight: ${FontWeight.NORMAL};
  font-size: 20px;
  color: ${Color.white};
  line-height: 36px;
  margin-bottom: 34px;
`
const CaptionContainerMobile = styled.div`
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
