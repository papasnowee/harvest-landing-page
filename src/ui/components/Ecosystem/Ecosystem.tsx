import React, { FC } from 'react'

import SushiswapIcon from '@/pictures/sushiswap.inline.svg'
import CurveIcon from '@/pictures/curve.inline.svg'
import UniswapIcon from '@/pictures/uniswap.inline.svg'
import CompoundIcon from '@/pictures/compound.inline.svg'
import KyberIcon from '@/pictures/kyber.inline.svg'
import BalancerIcon from './icons/balancer.inline.svg'
import { Styled } from './styles'

export const Ecosystem: FC = () => {
  return (
    <Styled.Container>
      <Styled.TextContainer>Ecosystem</Styled.TextContainer>
      <Styled.WithoutScrollBarWrapper>
        <Styled.ListContainer>
          <Styled.ProtocolContainer>
            <Styled.Link>
              <Styled.SushiswapIconContainer>
                <SushiswapIcon />
              </Styled.SushiswapIconContainer>
              <Styled.ProtocolText>SushiSwap</Styled.ProtocolText>
            </Styled.Link>
          </Styled.ProtocolContainer>
          <Styled.ProtocolContainer>
            <Styled.Link>
              <Styled.CompoundIconContainer>
                <CompoundIcon />
              </Styled.CompoundIconContainer>
              <Styled.ProtocolText>Compound</Styled.ProtocolText>
            </Styled.Link>
          </Styled.ProtocolContainer>
          <Styled.ProtocolContainer>
            <Styled.Link>
              <Styled.UniswapIconContainer>
                <UniswapIcon />
              </Styled.UniswapIconContainer>
              <Styled.ProtocolText>Uniswap</Styled.ProtocolText>
            </Styled.Link>
          </Styled.ProtocolContainer>
          <Styled.ProtocolContainer>
            <Styled.Link>
              <Styled.CurveIconContainer>
                <CurveIcon />
              </Styled.CurveIconContainer>
              <Styled.ProtocolText>Curve Finance</Styled.ProtocolText>
            </Styled.Link>
          </Styled.ProtocolContainer>
          <Styled.ProtocolContainer>
            <Styled.Link>
              <Styled.KyberIconContainer>
                <KyberIcon />
              </Styled.KyberIconContainer>
              <Styled.ProtocolText>Kyber Network</Styled.ProtocolText>
            </Styled.Link>
          </Styled.ProtocolContainer>
          <Styled.ProtocolContainer>
            <Styled.Link>
              <Styled.BalancerIconContainer>
                <BalancerIcon />
              </Styled.BalancerIconContainer>
              <Styled.ProtocolText>Balancer</Styled.ProtocolText>
            </Styled.Link>
          </Styled.ProtocolContainer>
        </Styled.ListContainer>
      </Styled.WithoutScrollBarWrapper>

      <Styled.Caption>+30 MORE</Styled.Caption>
    </Styled.Container>
  )
}
