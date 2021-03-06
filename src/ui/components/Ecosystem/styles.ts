import styled from 'styled-components'

import { Size } from '@/ui/style/size'
import { Color, FontWeight } from '@/ui/style'

const possibleSizeofScrollBar = '25px'

const protocolHeight = '108px'

const Container = styled.div`
  margin-top: 130px;
  display: flex;
  flex-direction: column;
  align-items: center;

  @media (max-width: ${Size.MOBILE_WIDTH}px) {
    margin-top: 50px;
    width: 280px;
  }
`
const WithoutScrollBarWrapper = styled.div`
  margin-top: 40px;

  @media (max-width: ${Size.MOBILE_WIDTH}px) {
    position: relative;
    margin-top: 18px;
    height: ${protocolHeight};
    width: calc(${Size.MOBILE_HORIZONTAL_MIN_WIDTH}px + 20px);
    overflow: hidden;
  }
`
const ListContainer = styled.ul`
  all: unset;
  display: block;
  display: flex;
  width: 100%;

  & li {
    margin-right: 21px;
  }

  & li:nth-last-child(1) {
    margin-right: 0;
  }

  @media (max-width: ${Size.MOBILE_WIDTH}px) {
    height: calc(${protocolHeight + possibleSizeofScrollBar});
    position: absolute;
    overflow: auto;
    width: 100%;

    ::-webkit-scrollbar {
      width: 0px;
      background: transparent; /* make scrollbar transparent */
    }

    -ms-overflow-style: none;
    scrollbar-width: none;

    & li {
      margin-right: 10px;
    }
  }
`
const TextContainer = styled.span`
  font-weight: ${FontWeight.BOLD};
  font-size: 30px;
  line-height: 39px;
  color: ${Color.black};
  text-align: center;

  @media (max-width: ${Size.MOBILE_WIDTH}px) {
    font-size: 20px;
    line-height: 28px;
  }
`

const ProtocolContainer = styled.li`
  all: unset;
  box-sizing: border-box;
  display: block;
  flex-shrink: 0;
  width: 176px;
  height: 154px;
  border: 1.5px solid #dddde9;
  border-radius: 12px;
  background: ${Color.white};
  box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 6px -1px, rgba(0, 0, 0, 0.06) 0px 2px 4px -1px;

  @media (max-width: ${Size.MOBILE_WIDTH}px) {
    width: 124px;
    height: ${protocolHeight};
    border: 0;
    box-shadow: unset;
    border-radius: 8px;
  }
`

const Link = styled.a`
  all: unset;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  height: 100%;
  border-radius: 12px;

  &:hover {
    border-radius: 8px;
  }

  @media (max-width: ${Size.MOBILE_WIDTH}px) {
    width: 100%;
    height: 100%;
    border-radius: 8px;
  }
`

const ProtocolText = styled.span`
  font-weight: ${FontWeight.NORMAL};
  font-size: 16px;
  line-height: 21px;
  color: ${Color.black};

  @media (max-width: ${Size.MOBILE_WIDTH}px) {
    font-size: 14px;
    line-height: 18px;
  }
`
const SushiswapIconContainer = styled.div`
  margin-top: 28px;
  margin-bottom: 19px;

  svg {
    width: 60px;
    height: 60px;
  }

  @media (max-width: ${Size.MOBILE_WIDTH}px) {
    margin-top: 20px;
    margin-bottom: 10px;

    svg {
      width: 44px;
      height: 44px;
    }
  }
`

const CompoundIconContainer = styled.div`
  margin-top: 27px;
  margin-bottom: 18px;

  svg {
    width: 61px;
    height: 62px;
  }

  @media (max-width: ${Size.MOBILE_WIDTH}px) {
    margin-top: 20px;
    margin-bottom: 10px;

    svg {
      width: 44px;
      height: 44px;
    }
  }
`

const UniswapIconContainer = styled.div`
  margin-top: 26px;
  margin-bottom: 17px;

  svg {
    width: 64px;
    height: 64px;
  }

  @media (max-width: ${Size.MOBILE_WIDTH}px) {
    margin-top: 19px;
    margin-bottom: 10px;

    svg {
      width: 45px;
      height: 45px;
    }
  }
`

const CurveIconContainer = styled.div`
  margin-top: 29px;
  margin-bottom: 20px;

  svg {
    width: 58px;
    height: 58px;
  }

  @media (max-width: ${Size.MOBILE_WIDTH}px) {
    margin-top: 21px;
    margin-bottom: 10px;

    svg {
      width: 43px;
      height: 43px;
    }
  }
`

const KyberIconContainer = styled.div`
  margin-top: 28px;
  margin-bottom: 19px;

  svg {
    width: 42.35px;
    height: 60px;
  }

  @media (max-width: ${Size.MOBILE_WIDTH}px) {
    margin-top: 20px;
    margin-bottom: 10px;

    svg {
      width: 31.06px;
      height: 44px;
    }
  }
`

const BalancerIconContainer = styled.div`
  margin-top: 31px;
  margin-bottom: 22px;

  svg {
    width: 54px;
    height: 54px;
  }

  @media (max-width: ${Size.MOBILE_WIDTH}px) {
    margin-top: 21px;
    margin-bottom: 13px;

    svg {
      width: 39.7px;
      height: 39.7px;
    }
  }
`

const Caption = styled.div`
  margin-top: 24px;
  font-weight: ${FontWeight.BOLD};
  font-size: 18px;
  line-height: 23px;
  color: ${Color.grayText};

  @media (max-width: ${Size.MOBILE_WIDTH}px) {
    font-size: 16px;
    line-height: 21px;
  }
`

export const Styled = {
  WithoutScrollBarWrapper,
  Caption,
  BalancerIconContainer,
  KyberIconContainer,
  CurveIconContainer,
  UniswapIconContainer,
  CompoundIconContainer,
  ProtocolText,
  SushiswapIconContainer,
  Link,
  ProtocolContainer,
  TextContainer,
  Container,
  ListContainer,
}
