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
        <Styled.Link href="https://www.coinbase.com/">
          <Styled.CoinbaseIconContainer>
            <CoinbaseIcon />
          </Styled.CoinbaseIconContainer>
        </Styled.Link>
      </Styled.Li>
      <Styled.Li>
        <Styled.Link href="https://www.crypto.com/">
          <Styled.CryptoComIconContainer>
            <CryptoComIcon />
          </Styled.CryptoComIconContainer>
        </Styled.Link>
      </Styled.Li>
      <Styled.Li>
        <Styled.Link href="https://www.binance.com/">
          <Styled.BinanceIconContainer>
            <BinanceIcon />
          </Styled.BinanceIconContainer>
        </Styled.Link>
      </Styled.Li>
      <Styled.Li>
        <Styled.Link href="https://www.bancor.network/">
          <Styled.BancorIconContainer>
            <BancorIcon />
          </Styled.BancorIconContainer>
        </Styled.Link>
      </Styled.Li>
    </Styled.ListContainer>
  )
}
