import styled from 'styled-components'

import { Size } from '@/ui/style/size'
import { Color, FontWeight } from '@/ui/style'

const Container = styled.div`
  height: 124px;
  background: linear-gradient(0deg, #1c2342, #1c2342);
  border-radius: 12px;
  margin-top: 80px;
  display: flex;
  align-items: center;
  padding-right: 60px;

  @media (max-width: ${Size.MOBILE_WIDTH + 1}px) {
    display: none;
  }
`
const ContainerMobile = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 30px 0;
  flex-direction: column;
  height: 190px;
  background: linear-gradient(0deg, #2a304d, #2a304d);
  border-radius: 8px;
  margin-top: 50px;

  @media (min-width: ${Size.MOBILE_WIDTH + 1}px) {
    display: none;
  }
`
const Text = styled.span`
  border-radius: 12px 0 0 12px;
  height: 100%;
  padding-left: 60px;
  display: flex;
  align-items: center;
  font-style: normal;
  font-weight: ${FontWeight.BOLD};
  font-size: 30px;
  line-height: 39px;
  color: ${Color.white};
  background: rgb(77, 82, 107);

  @media (max-width: ${Size.MOBILE_WIDTH}px) {
    padding: 0;
    background: none;
    height: auto;
    font-size: 20px;
    line-height: 26px;
    text-align: center;
  }
`

const RectangleTop1 = styled.div`
    top: 24px;
    left: 72px;
    position: absolute;
    width: 74px;
    height: 31px;
    border-radius: 0 8px 0 0;
    background: rgb(41, 47, 77);
    transform: rotate(60deg);
  }
`

const RectangleBot1 = styled.div`
    bottom: 24px;
    left: 72px;
    position: absolute;
    width: 74px;
    height: 31px;
    border-radius: 0 0 8px 0;
    background: rgb(41, 47, 77);
    transform: rotate(-60deg);
  }
`

const Rectangle1 = styled.div`
  position: absolute;
  left: 70px;
  height: 100%;
  width: 34px;
  background: rgb(41, 47, 77);
`

const RectangleTop2 = styled.div`
    top: 24px;
    left: 38px;
    position: absolute;
    width: 74px;
    height: 31px;
    border-radius: 0 8px 0 0;
    background: rgb(49, 55, 84);
    transform: rotate(60deg);
  }
`

const RectangleBot2 = styled.div`
    bottom: 24px;
    left: 38px;
    position: absolute;
    width: 74px;
    height: 31px;
    border-radius: 0 0 8px 0;
    background: rgb(49, 55, 84);
    transform: rotate(-60deg);
  }
`

const Rectangle2 = styled.div`
  position: absolute;
  left: 35px;
  height: 100%;
  width: 34px;
  background: rgb(49, 55, 84);
`

const RectangleTop3 = styled.div`
    top: 24px;
    left: 4px;
    position: absolute;
    width: 74px;
    height: 31px;
    border-radius: 0 8px 0 0;
    background: rgb(77, 82, 107);
    transform: rotate(60deg);
  }
`

const RectangleBot3 = styled.div`
    bottom: 24px;
    left: 4px;
    position: absolute;
    width: 74px;
    height: 31px;
    border-radius: 0 0 8px 0;
    background: rgb(77, 82, 107);
    transform: rotate(-60deg);
  }
`

const Rectangle3 = styled.div`
  position: absolute;
  left: 1px;
  height: 100%;
  width: 34px;
  background: rgb(77, 82, 107);
`
const Wrapper = styled.div`
  position: relative;
  height: 100%;
  width: 140px;
  margin-left: -1px;

  @media (max-width: ${Size.MOBILE_WIDTH + 1}px) {
    display: none;
  }
`

const ButtonContainer = styled.div`
  margin-left: auto;
`

export const Styled = {
    ButtonContainer,
    Wrapper,
    Rectangle3,
    RectangleTop3,
    RectangleBot3,
    Rectangle2,
    RectangleTop2,
    RectangleBot2,
    Rectangle1,
    RectangleTop1,
    RectangleBot1,
    ContainerMobile,
    Text,
    Container,
}
