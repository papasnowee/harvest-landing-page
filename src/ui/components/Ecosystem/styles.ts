import styled from 'styled-components'

import { Size } from '@/ui/style/size'
import { Color, FontWeight } from '@/ui/style'

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

const ListContainer = styled.ul`
  all: unset;
  display: block;
  margin-top: 40px;
  display: flex;
  width: 100%;

  & li {
    margin-right: 21px;
  }

  & li:nth-last-child(1) {
    margin-right: 0;
  }

  @media (max-width: ${Size.MOBILE_WIDTH}px) {
    margin-top: 18px;
    overflow: auto;

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

  // TODO: return this styles when urls for protocols will be done
  // cursor: pointer;
  // &:hover {
  //   background: linear-gradient(180deg, #ffffff 0%, rgba(255, 255, 255, 0) 91.82%);
  //   filter: drop-shadow(4px 16px 40px rgba(39, 68, 95, 0.1));
  //   border-radius: 8px;
  // }

  @media (max-width: ${Size.MOBILE_WIDTH}px) {
    width: 124px;
    height: 108px;
    background: ${Color.white};
    border: 0;
    filter: drop-shadow(4px 16px 40px rgba(39, 68, 95, 0.1));
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
export const Styled = {
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
