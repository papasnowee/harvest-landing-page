import styled from 'styled-components'

import { Color, FontWeight } from '@/ui/style'
import { Size } from '@/ui/style/size'

const Container = styled.div``

const Text = styled.div`
  text-align: center;
  color: ${Color.black};
  font-weight: ${FontWeight.BOLD};
  font-size: 18px;
  line-height: 23px;
  margin-top: 23px;

  @media (max-width: ${Size.MOBILE_WIDTH}px) {
    font-size: 18px;
    line-height: 23px;
    margin-top: 18px;
  }
`

const CoindeskContainer = styled.a`
  all: unset;
  display: block;
  cursor: pointer;
  width: 205px;
  height: 40px;

  svg {
    width: 205px;
    height: 40px;
    display: block;
  }

  @media (max-width: ${Size.MOBILE_WIDTH}px) {
    width: 115px;
    height: 22px;

    svg {
      width: 115px;
      height: 22px;
    }
  }
`

const CointelegraphContainer = styled(CoindeskContainer)`
  width: 254px;
  height: 48px;

  svg {
    width: 254px;
    height: 48px;
    display: block;
  }

  @media (max-width: ${Size.MOBILE_WIDTH}px) {
    width: 138px;
    height: 26px;

    svg {
      width: 138px;
      height: 26px;
    }
  }
`

const BottomBlockContainer = styled.div`
  margin-top: 23px;
  display: flex;

  & > :nth-child(1) {
    margin-right: 81px;
    margin-left: 335px;
  }

  @media (max-width: ${Size.MOBILE_WIDTH}px) {
    margin-top: 18px;

    & > :nth-child(1) {
      margin-right: 24px;
      margin-left: 0;
    }
  }
`

export const Styled = {
  CointelegraphContainer,
  CoindeskContainer,
  Container,
  Text,
  BottomBlockContainer,
}
