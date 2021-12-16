import styled from 'styled-components'

import { Color, FontWeight } from '@/ui/style'
import { Size } from '@/ui/style/size'

const Container = styled.div`
  height: 88px;
  margin-top: 100px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;

  @media (max-width: ${Size.MOBILE_WIDTH + 1}px) {
    margin-top: 50px;
    height: 95px;
  }
`

const Text = styled.div`
  font-weight: ${FontWeight.BOLD};
  font-size: 18px;
  line-height: 23px;
  color: ${Color.black};

  @media (max-width: ${Size.MOBILE_WIDTH + 1}px) {
    font-size: 16px;
    line-height: 21px;
  }
`

const AuditorsContainer = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;

  @media (max-width: ${Size.MOBILE_WIDTH + 1}px) {
    flex-wrap: wrap;
  }
`

const LeastAuthorityContainer = styled.a`
  all: unset;
  display: block;
  cursor: pointer;
  width: 242px;
  height: 49px;
  margin-bottom: 3px;
  position: relative;

  & svg {
    width: 242px;
    height: 49px;
    display: block;
  }

  @media (max-width: ${Size.MOBILE_WIDTH}px) {
    width: 118px;
    height: 23.89px;
    margin-left: 7px;

    & svg {
      width: 118px;
      height: 23.89px;
    }
  }
`

const HaechiContainer = styled.a`
  all: unset;
  display: block;
  cursor: pointer;
  width: 192px;
  height: 39.65px;
  margin-top: 6px;
  position: relative;

  & svg {
    width: 192px;
    height: 39.65px;
    display: block;
  }

  @media (max-width: ${Size.MOBILE_WIDTH}px) {
    width: 105px;
    height: 21.68px;
    margin-right: 13px;
    margin-bottom: 3px;

    & svg {
      width: 105px;
      height: 21.68px;
    }
  }
`
const PeckShieldContainer = styled.a`
  all: unset;
  display: block;
  cursor: pointer;
  width: 199px;
  height: 56px;
  margin-bottom: -3px;
  position: relative;

  & svg {
    width: 199px;
    height: 56px;
    display: block;
  }

  @media (max-width: ${Size.MOBILE_WIDTH}px) {
    width: 114px;
    height: 32px;
    margin-left: 11px;

    & svg {
      width: 114px;
      height: 32px;
    }
  }
`

const CertikContainer = styled.a`
  all: unset;
  display: block;
  cursor: pointer;
  width: 206px;
  height: 53px;

  & svg {
    width: 206px;
    height: 53px;
    display: block;
  }

  @media (max-width: ${Size.MOBILE_WIDTH}px) {
    width: 105px;
    height: 27px;
    margin-right: 19px;
    position: relative;
    margin-top: 2px;

    & svg {
      width: 105px;
      height: 27px;
    }
  }
`

export const Styled = {
  CertikContainer,
  PeckShieldContainer,
  LeastAuthorityContainer,
  HaechiContainer,
  AuditorsContainer,
  Container,
  Text,
}
