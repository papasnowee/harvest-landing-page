import styled from 'styled-components'

import { Size } from '@/ui/style/size'

const ListContainer = styled.div`
  all: unset;
  display: block;
  display: flex;
  justify-content: space-between;
  overflow: auto;

  & li {
    margin-right: 25px;
  }

  & li:nth-last-child(1) {
    margin-right: 0;
  }
`

const Link = styled.a`
  all: unset;
  height: 98px;
  display: flex;
  align-items: center;
  cursor: pointer;

  @media (max-width: ${Size.MOBILE_WIDTH}px) {
    height: 63px;
  }
`

const CoinbaseLi = styled.li`
  all: unset;

  & svg {
    width: 158px;
    height: 31.99px;
    display: block;

    @media (max-width: ${Size.MOBILE_WIDTH}px) {
      width: 102.02px;
      height: 20.65px;
    }
  }
`
const BinanceLi = styled.li`
  all: unset;

  & svg {
    width: 163px;
    height: 32.6px;
    display: block;

    @media (max-width: ${Size.MOBILE_WIDTH}px) {
      width: 96.77px;
      height: 19.35px;
    }
  }
`

const CryptoComLi = styled.li`
  all: unset;

  & svg {
    width: 194px;
    height: 45px;
    display: block;

    @media (max-width: ${Size.MOBILE_WIDTH}px) {
      width: 122.19px;
      height: 28.07px;
    }
  }
`
const UniswapLi = styled.li`
  all: unset;

  & img {
    width: 185px;
    height: 47px;
    display: block;

    @media (max-width: ${Size.MOBILE_WIDTH}px) {
      width: 118px;
      height: 29.98px;
    }
  }
`

const BancorLi = styled.li`
  all: unset;

  & svg {
    width: 145px;
    height: 47.78px;
    display: block;

    @media (max-width: ${Size.MOBILE_WIDTH}px) {
      width: 82.49px;
      height: 30.48px;
    }
  }
`
export const Styled = {
  BancorLi,
  UniswapLi,
  Link,
  CryptoComLi,
  BinanceLi,
  ListContainer,
  CoinbaseLi,
}
