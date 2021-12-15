import styled from 'styled-components'

import { Size } from '@/ui/style/size'
import { Color, FontWeight } from '@/ui/style'

const Container = styled.div`
  width: 560px;
  height: 466px;
  padding: 50px;

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
    padding: 31px 24px 24px 24px;
  }
`
const MainTextContainer = styled.div`
  font-weight: ${FontWeight.BOLD};
  font-size: 36px;
  line-height: 47px;
  color: ${Color.black};
  margin-bottom: 20px;

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
  margin-bottom: 30px;

  @media (max-width: ${Size.MOBILE_WIDTH}px) {
    font-size: 14px;
    line-height: 25px;
    margin-bottom: 20px;
  }
`
const IconContainer = styled.div<{
    width: string
    height: string
    widthMobile: string
    heightMobile: string
}>`
  ${(props) => {
        const { width, height, widthMobile, heightMobile } = props
        return `
            width: ${width};
            height: ${height};
            margin-bottom: 29.54px;
            
            @media (max-width: ${Size.MOBILE_WIDTH}px) {
                width: ${widthMobile};
                height: ${heightMobile};
                margin-bottom: 20.37px;
            }
        `
    }}
`

export const Styled = {
    Text,
    MainTextContainer,
    Container,
    IconContainer,
}
