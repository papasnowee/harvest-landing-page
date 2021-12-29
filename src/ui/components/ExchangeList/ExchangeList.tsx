import React, { FC } from 'react'

import { Styled } from './styles'
import CoinbaseIcon from './icons/coinbase.inline.svg'
import BinanceIcon from './icons/binance.inline.svg'
import CryptoComIcon from './icons/cryptoCom.inline.svg'
import BancorIcon from './icons/bancor.inline.svg'

export const ExchangeList: FC = () => {
  return (
    <Styled.ListContainer>
      <Styled.Li>
        <Styled.ExchangeContainer>
          <Styled.CoinbaseIconContainer>
            <CoinbaseIcon />
          </Styled.CoinbaseIconContainer>
        </Styled.ExchangeContainer>
      </Styled.Li>
      <Styled.Li>
        <Styled.ExchangeContainer>
          <Styled.CryptoComIconContainer>
            <CryptoComIcon />
          </Styled.CryptoComIconContainer>
        </Styled.ExchangeContainer>
      </Styled.Li>
      <Styled.Li>
        <Styled.ExchangeContainer>
          <Styled.BinanceIconContainer>
            <BinanceIcon />
          </Styled.BinanceIconContainer>
        </Styled.ExchangeContainer>
      </Styled.Li>
      <Styled.Li>
        <Styled.ExchangeContainer>
          <Styled.BancorIconContainer>
            <BancorIcon />
          </Styled.BancorIconContainer>
        </Styled.ExchangeContainer>
      </Styled.Li>
    </Styled.ListContainer>
  )
}
