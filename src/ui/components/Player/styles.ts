import styled from 'styled-components'

import { Size } from '@/ui/style/size'
import { Color, FontWeight } from '@/ui/style'

export const playerHeight = 653

const Container = styled.button`
  all: unset;
  width: 100%;
  cursor: pointer;
  height: ${playerHeight}px;
  position: relative;
  display: flex;
  justify-content: space-evenly;
  margin-top: 73px;

  @media (max-width: ${Size.MOBILE_WIDTH}px) {
    height: 196px;
    margin-top: 23px;
  }
`

const SVGContainer = styled.div`
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  position: absolute;
  z-index: -1;

  @media (max-width: ${Size.MOBILE_WIDTH + 1}px) {
    display: none;
  }
`

const SVGContainerMobile = styled.div`
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  position: absolute;
  z-index: -1;

  @media (min-width: ${Size.MOBILE_WIDTH + 1}px) {
    display: none;
  }
`

const ButtonTextContainer = styled.div`
  margin-top: 209px;
  display: flex;
  flex-direction: column;
  align-items: center;

  @media (max-width: ${Size.MOBILE_WIDTH}px) {
    margin-top: 36px;
  }
`

const Text = styled.div`
  color: ${Color.white};
  margin-top: 11px;
  font-weight: ${FontWeight.BOLD};
  font-size: 40px;
  line-height: 60px;

  @media (max-width: ${Size.MOBILE_WIDTH}px) {
    margin-top: 3px;
    font-size: 18px;
    line-height: 27px;
  }
`

const Iframe = styled.iframe`
  width: 100%;
  height: 100%;
`

export const Styled = {
  Iframe,
  Text,
  ButtonTextContainer,
  Container,
  SVGContainerMobile,
  SVGContainer,
}
