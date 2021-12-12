import React, { FC } from 'react'

import { Styled } from './styles'
import CoinbaseIcon from './icons/coinbase.inline.svg'
import BinanceIcon from './icons/binance.inline.svg'
import CryptoComIcon from './icons/cryptoCom.inline.svg'
import uniswapIcon from './icons/uniswap.png'
import BancorIcon from './icons/bancor.inline.svg'

const UniswapIcon: FC = () => <img src={uniswapIcon} />

export const ExchangeList: FC = () => {
  return (
    <Styled.ListContainer>
      <Styled.CoinbaseLi>
        <Styled.Link href="https://www.coinbase.com/">
          <CoinbaseIcon />
        </Styled.Link>
      </Styled.CoinbaseLi>
      <Styled.BinanceLi>
        <Styled.Link href="https://www.binance.com/">
          <BinanceIcon />
        </Styled.Link>
      </Styled.BinanceLi>
      <Styled.CryptoComLi>
        <Styled.Link href="https://www.crypto.com/">
          <CryptoComIcon />
        </Styled.Link>
      </Styled.CryptoComLi>
      <Styled.UniswapLi>
        <Styled.Link href="https://www.uniswap.org/">
          <UniswapIcon />
        </Styled.Link>
      </Styled.UniswapLi>
      <Styled.BancorLi>
        <Styled.Link href="https://www.bancor.network/">
          <BancorIcon />
        </Styled.Link>
      </Styled.BancorLi>
    </Styled.ListContainer>
  )
}
