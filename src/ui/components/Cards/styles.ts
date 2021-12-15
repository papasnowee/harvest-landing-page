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

  background: linear-gradient(167.17deg, #ffffff 3.12%, rgba(255, 255, 255, 0) 130.37%);
  filter: drop-shadow(4px 16px 60px rgba(39, 68, 95, 0.08));
  border-radius: 24px;

  &:hover {
    background: ${Color.white};
    box-shadow: 4px 16px 60px rgba(39, 68, 95, 0.08);
  }

  @media (max-width: ${Size.MOBILE_WIDTH}px) {
    width: 280px;
    height: 382px;
    background: ${Color.white};
    box-shadow: 4px 16px 60px rgba(39, 68, 95, 0.08);
    border-radius: 8px;
    padding: 0 24px 24px 24px;
  }
`

const CardContainerSecond = styled(CardContainer)`
  @media (max-width: ${Size.MOBILE_WIDTH}px) {
    height: 357px;
  }
`

const HarvestIconContainer = styled.div`
  margin-top: 50px;
  margin-bottom: 30px;
  width: 131px;
  height: 117px;

  svg {
    display: block;
    width: 131px;
    height: 117px;
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
  margin-top: 36px;
  margin-bottom: 26px;
  width: 135px;
  height: 135px;

  svg {
    display: block;
    width: 135px;
    height: 135px;
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
  HarvestIconContainer,
  CardContainer,
  Container,
}
