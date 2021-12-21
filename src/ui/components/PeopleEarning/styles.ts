import styled from 'styled-components'

import { Size } from '@/ui/style/size'
import { Color, FontWeight } from '@/ui/style'

const Container = styled.div`
  margin-bottom: 60px;

  @media (max-width: ${Size.MOBILE_WIDTH + 1}px) {
    display: none;
  }
`

const TopBlockContainer = styled.div`
  display: flex;
  justify-content: space-between;
`
const BottomBlockContainer = styled.div``

const LeftBlock = styled.div`
  display: flex;
  flex-direction: column;
  margin-right: 128px;

  @media (max-width: ${Size.MOBILE_WIDTH}px) {
  }
`
const NumberOfPeople = styled.div`
  font-weight: ${FontWeight.BOLD};
  font-size: 72px;
  line-height: 108px;
  color: ${Color.black};
  margin-bottom: 2px;

  @media (max-width: ${Size.MOBILE_WIDTH}px) {
    text-align: center;
    font-size: 36px;
    line-height: 54px;
    margin-bottom: 4px;
  }
`

const Text = styled.div`
  font-weight: ${FontWeight.BOLD};
  font-size: 30px;
  line-height: 42px;
  color: ${Color.black};
  margin-bottom: 83px;

  @media (max-width: ${Size.MOBILE_WIDTH}px) {
    text-align: center;
    font-size: 20px;
    line-height: 28px;
    margin-bottom: 21px;
  }
`

const ButtonContainer = styled.div`
  display: flex;
  width: 158px;
  justify-content: space-between;

  @media (max-width: ${Size.MOBILE_WIDTH}px) {
    width: 104px;
  }
`

const Button = styled.button<{ isActive: boolean }>`
  ${(props) => {
    const { isActive } = props
    return `
            all: unset;
            width: 64px;
            height: 64px;
            margin-right: 30px;
            background: ${isActive
        ? Color.blue
        : 'linear-gradient(180deg, #FFFFFF 0%, rgba(255, 255, 255, 0) 91.82%)'
      };

            box-shadow: ${isActive && '4px 16px 40px rgba(39, 68, 95, 0.08)'};
            filter: ${isActive && 'drop-shadow(4px 16px 40px rgba(39, 68, 95, 0.08))'};
            transform: ${isActive && 'matrix(-1, 0, 0, 1, 0, 0)'};

            border-radius: 8px;

            & :hover {
                background: linear-gradient(44.08deg, #95d5f9 -8.27%, #63b3df 121.42%);
                box-shadow: 0px 20px 40px rgba(108, 185, 227, 0.38);
            }

            @media (max-width: ${Size.MOBILE_WIDTH}px) {
                width: 42px;
                height: 42px;
                margin-right: 20px;
            }
    `
  }}
`

const CardColumn = styled.div`
  & > :nth-child(n) {
    margin-bottom: 20px;
  }

  & > :nth-last-child(1) {
    margin-bottom: 0;
  }
`

const CardBlock = styled.div`
  display: flex;
  justify-content: space-between;

  & > :nth-child(n) {
    margin-right: 20px;
  }

  & > :nth-last-child(1) {
    margin-right: 0;
  }
`

const MobileContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 30px;

  @media (min-width: ${Size.MOBILE_WIDTH + 1}px) {
    display: none;
  }
`
const CardMobileContainer = styled.div`
  margin-bottom: 24px;

  & > :nth-child(n) {
    margin-bottom: 10px;
  }

  & > :nth-last-child(1) {
    margin-bottom: 0;
  }
`
export const Styled = {
  CardMobileContainer,
  MobileContainer,
  CardColumn,
  CardBlock,
  Button,
  ButtonContainer,
  NumberOfPeople,
  Text,
  LeftBlock,
  Container,
  TopBlockContainer,
  BottomBlockContainer,
}
