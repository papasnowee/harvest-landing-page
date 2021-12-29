import styled from 'styled-components'

import { Size } from '@/ui/style/size'

const ListContainer = styled.ul`
  all: unset;
  display: block;
  display: flex;
  justify-content: space-between;
  margin: 0 auto 110px auto;

  @media (max-width: ${Size.MOBILE_WIDTH}px) {
    margin-bottom: 26px;
    flex-wrap: wrap;
    width: 240px;
    justify-content: space-evenly;
    position: relative;
  }
`

const CoinbaseIconContainer = styled.div`
  height: 32px;
  width: 158px;
  position: relative;
  margin-top: -6px;

  svg {
    height: 32px;
    width: 158px;
    display: block;
  }

  @media (max-width: ${Size.MOBILE_WIDTH}px) {
    height: 21px;
    width: 102px;

    svg {
      height: 21px;
      width: 102px;
    }
  }
`

const BinanceIconContainer = styled.div`
  height: 33px;
  width: 163px;

  svg {
    height: 33px;
    width: 163px;
    display: block;
  }

  @media (max-width: ${Size.MOBILE_WIDTH}px) {
    height: 19px;
    width: 97px;

    svg {
      height: 19px;
      width: 97px;
    }
  }
`

const CryptoComIconContainer = styled.div`
  height: 45px;
  width: 194px;

  svg {
    height: 45px;
    width: 194px;
    display: block;
  }

  @media (max-width: ${Size.MOBILE_WIDTH}px) {
    height: 28px;
    width: 122px;
    position: relative;
    margin-left: 20px;

    svg {
      height: 28px;
      width: 122px;
    }
  }
`

const BancorIconContainer = styled.div`
  height: 48px;
  width: 145px;
  position: relative;
  margin-left: -20px;

  svg {
    height: 48px;
    width: 145px;
    display: block;
  }

  @media (max-width: ${Size.MOBILE_WIDTH}px) {
    height: 30px;
    width: 91px;

    svg {
      height: 30px;
      width: 91px;
    }
  }
`
const Li = styled.li`
  all: unset;
  width: 229px;
  height: 91px;

  @media (max-width: ${Size.MOBILE_WIDTH}px) {
    width: 120px;
    height: 40px;
  }
`

const ExchangeContainer = styled.div`
  height: 100%;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
`

export const Styled = {
  CoinbaseIconContainer,
  BinanceIconContainer,
  CryptoComIconContainer,
  BancorIconContainer,
  ExchangeContainer,
  Li,
  ListContainer,
}
