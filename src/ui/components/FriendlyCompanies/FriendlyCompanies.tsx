import React, { FC } from 'react'

import { Company } from './components/Companies/Company'
import { Harvest } from './components/Harvest'
import { Money } from './components/Money'
import { Styled } from './styles'

const stablecoinsCircleColor = '#C6DFF1'
const kyberCircleColor = 'rgba(68, 202, 145, 0.22)'

export const FriendlyCompanies: FC = () => {
  return (
    <Styled.Container>
      <Styled.Background />
      <Styled.SushiswapContainer>
        <Company text="Sushiswap" icon="sushiswap" />
      </Styled.SushiswapContainer>
      <Styled.CurveContainer>
        <Company text="Curve" icon="curve" />
      </Styled.CurveContainer>
      <Styled.UniswapContainer>
        <Company text="Uniswap" icon="uniswap" />
      </Styled.UniswapContainer>
      <Styled.CompoundContainer>
        <Company text="Compound" icon="compound" />
      </Styled.CompoundContainer>
      <Styled.BalancerContainer>
        <Company text="Balancer" icon="balancer" />
      </Styled.BalancerContainer>
      <Styled.EthereumContainer>
        <Company text="Balancer" icon="ethereum" />
      </Styled.EthereumContainer>
      <Styled.EthereumContainer>
        <Company text="Ethereum" icon="ethereum" />
      </Styled.EthereumContainer>
      <Styled.StablecoinsContainer>
        <Company text="Stablecoins" icon="stablecoins" circleColor={stablecoinsCircleColor} />
      </Styled.StablecoinsContainer>
      <Styled.KyberContainer>
        <Company text="Kyber" icon="kyber" circleColor={kyberCircleColor} />
      </Styled.KyberContainer>
      <Styled.HarvestContainer>
        <Harvest />
      </Styled.HarvestContainer>
      <Styled.MoneyContainer>
        <Money />
      </Styled.MoneyContainer>
    </Styled.Container>
  )
}
