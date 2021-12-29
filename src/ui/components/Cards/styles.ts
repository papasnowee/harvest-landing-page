import styled from 'styled-components'

import { Size } from '@/ui/style/size'
import { Color, FontWeight } from '@/ui/style'

const Container = styled.div`
  margin-top: 100px;
  display: flex;
  justify-content: space-between;

  @media (max-width: ${Size.MOBILE_WIDTH}px) {
    margin-top: 50px;
    flex-direction: column;

    & > :nth-child(1) {
      margin-bottom: 20px;
    }
  }
`

const CardContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 560px;
  height: 466px;
  padding: 0 50px 50px 50px;

  background: ${Color.white};
  box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 6px -1px, rgba(0, 0, 0, 0.06) 0px 2px 4px -1px;
  border-radius: 24px;

  @media (max-width: ${Size.MOBILE_WIDTH}px) {
    width: 280px;
    height: 382px;
    box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 6px -1px, rgba(0, 0, 0, 0.06) 0px 2px 4px -1px;
    border-radius: 8px;
    padding: 0 24px 24px 24px;
  }
`

const CardContainerSecond = styled(CardContainer)`
  @media (max-width: ${Size.MOBILE_WIDTH}px) {
    height: 357px;
  }
`

const TractorIconContainer = styled.div`
  margin-top: 50px;
  margin-bottom: 30px;
  width: 160px;
  height: 122px;

  svg {
    display: block;
    width: 160px;
    height: 122px;
  }

  @media (max-width: ${Size.MOBILE_WIDTH}px) {
    width: 97px;
    height: 87px;
    margin-top: 31px;
    margin-bottom: 21px;

    svg {
      display: block;
      width: 97px;
      height: 87px;
    }
  }
`
const FarmerIconContainer = styled.div`
  margin-top: 50px;
  margin-bottom: 30px;
  width: 160px;
  height: 122px;

  svg {
    display: block;
    width: 160px;
    height: 122px;
  }

  @media (max-width: ${Size.MOBILE_WIDTH}px) {
    margin-top: 24px;
    margin-bottom: 18px;
    width: 100px;
    height: 100px;

    svg {
      display: block;
      width: 100px;
      height: 100px;
    }
  }
`

const MainTextContainer = styled.div`
  font-weight: ${FontWeight.BOLD};
  font-size: 36px;
  line-height: 47px;
  color: ${Color.black};
  margin-bottom: 30px;

  @media (max-width: ${Size.MOBILE_WIDTH}px) {
    font-size: 23px;
    line-height: 30px;
    margin-bottom: 16px;
  }
`
const Text = styled.div`
  font-weight: ${FontWeight.NORMAL};
  font-size: 16px;
  line-height: 29px;
  color: ${Color.black};

  @media (max-width: ${Size.MOBILE_WIDTH}px) {
    font-size: 14px;
    line-height: 25px;
  }
`
const ButtonContainer = styled.div`
    margin-top: auto;
  }
`

export const Styled = {
  CardContainerSecond,
  ButtonContainer,
  Text,
  MainTextContainer,
  FarmerIconContainer,
  TractorIconContainer,
  CardContainer,
  Container,
}
