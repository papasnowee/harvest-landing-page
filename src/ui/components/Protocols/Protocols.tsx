import React, { FC } from 'react'

import SushiswapIcon from './icons/sushiswap.inline.svg'
import CompoundIcon from './icons/compound.inline.svg'
import UniswapIcon from './icons/uniswap.inline.svg'
import CurveIcon from './icons/curve.inline.svg'
import KyberIcon from './icons/kyber.inline.svg'
import BalancerIcon from './icons/balancer.inline.svg'
import { Styled } from './styles'

// TODO: reuse these icons for FriendlyCompanies component

// TODO: add scroll in mobile version from figma layout

export const Protocols: FC = () => {
  return (
    <Styled.Container>
      <Styled.TextContainer>Protocols we leverage for farming</Styled.TextContainer>
      <Styled.TextContainerMobile>
        Protocols we leverage <br />
        for farming
      </Styled.TextContainerMobile>
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
    </Styled.Container>
  )
}
