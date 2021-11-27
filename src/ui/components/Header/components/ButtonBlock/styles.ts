import styled from 'styled-components'

import { FontWeight, Color } from '@/ui/style'

const TextContainer = styled.li`
  list-style-type: none;
`

const Container = styled.ul`
  border: 1px solid black;
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
  text-decoration: none;
  font-weight: ${FontWeight.NORMAL};
  font-size: 16px;
  line-height: 29px;
  color: ${Color.white};
`
const DashboardContainer = styled.a`
  border: 1px solid black;
  display: block;
  width: 144px;
  height: 54px;
  text-decoration: none;
  font-weight: ${FontWeight.NORMAL};
  font-size: 16px;
  line-height: 29px;
  color: ${Color.white};
`

export const Styled = {
  DashboardContainer,
  Link,
  TextContainer,
  Container,
}
