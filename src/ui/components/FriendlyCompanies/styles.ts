import styled from 'styled-components'

import { Size } from '@/ui/style/size'

const Container = styled.div`
  border: 1px solid red;
  position: relative;
  width: 434px;
  height: 400px;

  @media (max-width: ${Size.MOBILE_WIDTH}px) {
    width: 312px;
    height: 272px;
    margin-left: -19px;
  }
`

const Background = styled.div`
  z-index: -1;
  position: absolute;
  left: 48px;
  width: 321px;
  height: 371px;
  background: rgba(255, 255, 255, 0.4);
  border-radius: 90px 40px;
  backdrop-filter: blur(34px);

  @media (max-width: ${Size.MOBILE_WIDTH}px) {
    left: 47px;
    width: 218px;
    height: 252px;
    border-radius: 61.2162px 27.2072px;
  }
`

const SushiswapContainer = styled.div`
  position: absolute;
  left: 119px;
  top: 25px;
  width: 125px;

  @media (max-width: ${Size.MOBILE_WIDTH}px) {
    left: 88px;
    top: 13px;
    width: 92px;
  }
`

const CurveContainer = styled.div`
  position: absolute;
  left: 26px;
  top: 90px;
  width: 93px;

  @media (max-width: ${Size.MOBILE_WIDTH}px) {
    left: 28px;
    top: 57px;
    width: 69px;
  }
`

const UniswapContainer = styled.div`
  position: absolute;
  left: 0;
  top: 168px;
  width: 111px;

  @media (max-width: ${Size.MOBILE_WIDTH}px) {
    left: 0;
    top: 114px;
    width: 82px;
  }
`

const CompoundContainer = styled.div`
  position: absolute;
  left: 26px;
  top: 246px;
  width: 129px;

  @media (max-width: ${Size.MOBILE_WIDTH}px) {
    left: 16px;
    top: 170px;
    width: 95px;
  }
`

const BalancerContainer = styled.div`
  position: absolute;
  left: 263px;
  top: 57px;
  width: 113px;

  @media (max-width: ${Size.MOBILE_WIDTH}px) {
    left: 194px;
    top: 32px;
    width: 83px;
  }
`

const EthereumContainer = styled.div`
  position: absolute;
  left: 305px;
  top: 115px;
  width: 118px;

  @media (max-width: ${Size.MOBILE_WIDTH}px) {
    left: 225px;
    top: 74px;
    width: 87px;
  }
`

const StablecoinsContainer = styled.div`
  position: absolute;
  left: 313px;
  top: 189px;
  width: 131px;

  @media (max-width: ${Size.MOBILE_WIDTH}px) {
    left: 186px;
    top: 173px;
    width: 97px;
  }
`
const KyberContainer = styled.div`
  position: absolute;
  left: 272px;
  top: 247px;
  width: 92px;

  @media (max-width: ${Size.MOBILE_WIDTH}px) {
    left: 233px;
    top: 127px;
    width: 68px;
  }
`

const HarvestContainer = styled.div`
  position: absolute;
  left: 136px;
  top: 104px;

  @media (max-width: ${Size.MOBILE_WIDTH}px) {
    top: 70px;
    left: 110px;
  }
`

const MoneyContainer = styled.div`
  position: absolute;
  left: 159px;
  top: 302px;

  @media (max-width: ${Size.MOBILE_WIDTH}px) {
    top: 205px;
    left: 125px;
  }
`
export const Styled = {
  MoneyContainer,
  HarvestContainer,
  KyberContainer,
  StablecoinsContainer,
  EthereumContainer,
  BalancerContainer,
  CompoundContainer,
  UniswapContainer,
  CurveContainer,
  SushiswapContainer,
  Container,
  Background,
}
