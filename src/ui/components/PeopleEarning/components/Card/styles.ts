import styled from 'styled-components'

import { Size } from '@/ui/style/size'
import { Color, FontWeight } from '@/ui/style'

const Container = styled.div`
  width: 370px;
  height: 110px;
  display: flex;
  padding: 0 24px 0 24px;
  justify-content: space-between;
  background: linear-gradient(180deg, #ffffff 0%, rgba(255, 255, 255, 0) 91.82%);
  filter: drop-shadow(4px 16px 40px rgba(39, 68, 95, 0.1));
  border-radius: 8px;
  box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 6px -1px, rgba(0, 0, 0, 0.06) 0px 2px 4px -1px;

  &:hover {
    box-shadow: 4px 16px 60px rgba(39, 68, 95, 0.18);
    background: ${Color.white};
  }

  @media (max-width: ${Size.MOBILE_WIDTH}px) {
    width: 280px;
    height: 81px;
    padding: 0 16px 0 16px;
  }
`

const RightBlock = styled.div`
  margin-top: 26px;
  width: 256px;

  @media (max-width: ${Size.MOBILE_WIDTH}px) {
    margin-top: 17px;
    width: 204px;
  }
`

const IconContainer = styled.div`
  width: 50px;
  height: 50px;
  margin-top: 30px;

  svg {
    width: 50px;
    height: 50px;
    display: block;
  }

  @media (max-width: ${Size.MOBILE_WIDTH}px) {
    margin-top: 17px;
    width: 34px;
    height: 34px;

    svg {
      width: 34px;
      height: 34px;
    }
  }
`

const UserAddress = styled.div`
  font-size: 14px;
  line-height: 25px;
  font-weight: ${FontWeight.LIGHT};
  color: ${Color.lightFont};
  text-overflow: ellipsis;
  overflow: hidden;

  @media (max-width: ${Size.MOBILE_WIDTH}px) {
    font-size: 13px;
    line-height: 16px;
  }
`
const BottomBlock = styled.div`
  display: flex;
  @media (max-width: ${Size.MOBILE_WIDTH}px) {
    margin-top: 6px;
  }
`

const PerDayContainer = styled.div`
  position: relative;
  font-weight: ${FontWeight.BOLD};
  font-size: 20px;
  line-height: 30px;
  color: ${Color.black};
  margin-right: 24px;
  margin-top: 1;

  @media (max-width: ${Size.MOBILE_WIDTH}px) {
    font-size: 18px;
    line-height: 27px;
    margin-right: 8px;
  }
`

const Percent = styled.div`
  margin-top: 4px;
  padding: 3px 6px 3px 5px;
  text-align: center;
  width: 47px;
  height: 24px;
  background: #4ccda6;
  border-radius: 4px;
  font-weight: ${FontWeight.NORMAL};
  font-size: 12px;
  line-height: 18px;
  color: ${Color.white};

  @media (max-width: ${Size.MOBILE_WIDTH}px) {
    padding: 2px 4px 2px 4px;
    width: 44px;
    height: 22px;
  }
`
export const Styled = {
  Percent,
  PerDayContainer,
  BottomBlock,
  UserAddress,
  RightBlock,
  IconContainer,
  Container,
}
