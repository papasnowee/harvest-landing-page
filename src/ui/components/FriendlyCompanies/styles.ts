import styled from 'styled-components'

import { Size } from '@/ui/style/size'

const Container = styled.div`
  position: relative;
  width: 434px;
  height: 400px;

  @media (max-width: ${Size.MOBILE_WIDTH}px) {
    width: 312px;
    height: 272px;
    margin-left: 3px;
    margin-bottom: 29px;
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
    left: 202px;
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

const DownArrowContainer = styled.div`
  position: absolute;
  left: 199px;
  top: 261px;

  @media (max-width: ${Size.MOBILE_WIDTH}px) {
    top: 178px;
    left: 153px;
  }
`
const CompoundVectorContainer = styled.div`
  & svg {
    width: 46.75px;
    height: 19.03px;
  }

  position: absolute;
  left: 90px;
  top: 217px;
  transform: rotate(-7.36deg);

  @media (max-width: ${Size.MOBILE_WIDTH}px) {
    top: 148px;
    left: 78px;

    & svg {
      display: block;
      width: 31.8px;
      height: 12.26px;
    }
  }
`

const UniswapVectorContainer = styled.div`
  & svg {
    width: 33.31px;
    height: 8.57px;
    display: block;
  }

  position: absolute;
  left: 95px;
  top: 150px;
  transform: rotate(-6deg);

  @media (max-width: ${Size.MOBILE_WIDTH}px) {
    top: 102px;
    left: 82px;

    & svg {
      width: 22.65px;
      height: 5.83px;
    }
  }
`
const CurveVectorContainer = styled.div`
  & svg {
    width: 30.37px;
    height: 44.89px;
    display: block;
  }

  position: absolute;
  left: 131px;
  top: 101px;

  @media (max-width: ${Size.MOBILE_WIDTH}px) {
    top: 73px;
    left: 104px;

    & svg {
      width: 20.65px;
      height: 16.38px;
    }
  }
`

const SushiswapVectorContainer = styled.div`
  & svg {
    width: 29.93px;
    height: 30.54px;
    display: block;
  }

  position: absolute;
  left: 161px;
  top: 66px;

  @media (max-width: ${Size.MOBILE_WIDTH}px) {
    top: 45px;
    left: 126px;

    & svg {
      width: 23.39px;
      height: 14.42px;
    }
  }
`
const BalancerVectorContainer = styled.div`
  & svg {
    width: 19.28px;
    height: 18.78px;
    display: block;
  }

  position: absolute;
  left: 233px;
  top: 83px;

  @media (max-width: ${Size.MOBILE_WIDTH}px) {
    top: 55px;
    left: 177px;

    & svg {
      width: 13.11px;
      height: 12.76px;
    }
  }
`

const EthereumVectorContainer = styled.div`
  & svg {
    width: 16.84px;
    height: 15.23px;
    display: block;
  }

  position: absolute;
  top: 132px;
  left: 281px;

  @media (max-width: ${Size.MOBILE_WIDTH}px) {
    top: 90px;
    left: 209px;

    & svg {
      width: 11.85px;
      height: 10.72px;
    }
  }
`

const StablecoinsKyberVectorContainer = styled.div`
  & svg {
    width: 18.97px;
    height: 13.03px;
    display: block;
  }

  position: absolute;
  top: 196px;
  left: 289px;

  @media (max-width: ${Size.MOBILE_WIDTH}px) {
    top: 133px;
    left: 214px;

    & svg {
      width: 12.91px;
      height: 8.86px;
    }
  }
`

const KyberStablecoinsVectorContainer = styled.div`
  & svg {
    width: 23.41px;
    height: 17.19px;
    display: block;
  }

  position: absolute;
  top: 244px;
  left: 242px;

  @media (max-width: ${Size.MOBILE_WIDTH}px) {
    top: 169px;
    left: 185px;

    & svg {
      width: 14.98px;
      height: 11px;
    }
  }
`
export const Styled = {
  KyberStablecoinsVectorContainer,
  StablecoinsKyberVectorContainer,
  EthereumVectorContainer,
  BalancerVectorContainer,
  SushiswapVectorContainer,
  CurveVectorContainer,
  UniswapVectorContainer,
  CompoundVectorContainer,
  DownArrowContainer,
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
