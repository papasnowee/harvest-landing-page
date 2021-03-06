import styled from 'styled-components'

import { FontWeight, Color } from '@/ui/style'
import { Size } from '@/ui/style/size'

import { ScrolledDown } from '../../Header'

interface IsHovered {
  isHovered: boolean
}

const TextContainer = styled.li`
  list-style-type: none;
`

const Container = styled.ul`
  display: flex;
  align-items: center;
  flex-direction: row;
  margin: 0;
  padding: 0;

  & li {
    margin-right: 30px;
  }

  & li:nth-last-child(2) {
    margin-right: 50px;
  }
  & li:nth-last-child(1) {
    margin-right: 0;
  }
`

const Link = styled.a`
  ${() => {
    return `
    display: flex;
    align-items: center;
    height: 54px;
    text-decoration: none;
    `
  }}
`

const DashboardContainer = styled.a<ScrolledDown>`
  ${(props) => {
    const { scrolledDown } = props
    return `
      background: ${'rgba(255, 255, 255, 0.2)'};
      text-align: center;
      border: ${`1px solid ${Color.white}`};
      border-radius: 8px;
      display: block;
      width: 144px;
      height: 54px;
      text-decoration: none;
      font-weight: ${FontWeight.NORMAL};
      font-size: 16px;
      line-height: 54px;
      color: ${Color.white};
      transition: color 0.2s, background 0.2s, border 0.2s;
      backdrop-filter: blur(9px);

      &:hover {
        background: ${Color.white};
        color: ${Color.black};
      }

      @media (max-width: ${Size.MOBILE_WIDTH}px) {
        border: ${!scrolledDown && `1px solid ${Color.white}`};
        color: ${scrolledDown ? Color.black : Color.white};
        background: ${scrolledDown ? Color.yellow : 'rgba(255, 255, 255, 0.2)'};

        &:hover {
          background: ${scrolledDown ? Color.hoverYellow : Color.white};
        }
      }
  `
  }}
`
const Text = styled.span<IsHovered & ScrolledDown>`
  ${(props) => {
    const { isHovered, scrolledDown } = props

    return `
      height: 29px;
      display: block;
      font-weight: ${FontWeight.NORMAL};
      font-size: 16px;
      line-height: 29px;
      border-bottom: ${isHovered && `1px solid ${Color.white}`};
      color: ${Color.white};
      transition: color 0.2s, border 0.2s;

      @media (max-width: ${Size.MOBILE_WIDTH}px) {
        border-bottom: ${isHovered && `1px solid ${scrolledDown ? Color.black : Color.white}`};
        color: ${scrolledDown ? Color.black : Color.white};
      }
    `
  }}
`

export const Styled = {
  Text,
  DashboardContainer,
  Link,
  TextContainer,
  Container,
}
