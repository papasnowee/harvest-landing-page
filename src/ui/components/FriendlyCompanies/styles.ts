import styled from 'styled-components'

import { Size } from '@/ui/style/size'
import { Color, FontWeight } from '@/ui/style'

const Container = styled.div`
  border: 1px solid red;
  position: relative;
  width: 434px;

  @media (max-width: ${Size.MOBILE_WIDTH}px) {
    width: 312;
  }
`
const Background = styled.div`
  z-index: -1;
  position: absolute;
  left: 48px;
  width: 321px;
  height: 371px;
  background: rgba(255, 255, 255, 0.4);
  border-radius: 90px 40px;

  @media (max-width: ${Size.MOBILE_WIDTH}px) {
    width: 218;
    height: 252px;
    border-radius: 61.2162px 27.2072px;
  }
`
export interface CompanyProps {
    width: string
    mobileWidth: string
}

const CompanyContainer = styled.div<CompanyProps>`
  ${(props) => {
        const { width, mobileWidth } = props
        return `
            display: flex;
            justify-content: space-between;
            align-items: center;
            background: ${Color.white};
            box-shadow: 2px 4px 10px rgba(10, 89, 91, 0.1);
            border-radius: 27px;
            height: 38px;
            width: ${width};
            padding-left: 8px;
            padding-right: 12px;
            font: 13px;
            color: ${Color.blackForCompany};
            font-weight: ${FontWeight.NORMAL};

            @media (max-width: ${Size.MOBILE_WIDTH}px) {
                width: ${mobileWidth};
                height: 28px;
                padding-left: 6px;
                padding-right: 8px;
                border-radius: 20px;
            }
        `
    }}
`

const TextContainerSushiswap = styled.div``

export const Styled = {
    TextContainerSushiswap,
    Container,
    Background,
    CompanyContainer,
}
