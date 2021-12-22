import styled from 'styled-components'

import { Color, FontWeight } from '@/ui/style'
import { Size } from '@/ui/style/size'

const lineHeightMobile = '21px'
const lineHeight = '24px'

const Container = styled.div`
  margin-top: 112px;
  height: 64px;
  display: flex;
  justify-content: space-between;
  font-size: 16px;
  line-height: ${lineHeight};
  font-weight: ${FontWeight.LIGHT};
  color: ${Color.white};

  @media (max-width: ${Size.MOBILE_WIDTH}px) {
    height: 100%;
    margin-top: 50px;
    font-size: 14px;
    line-height: ${lineHeightMobile};
    flex-direction: column-reverse;
    padding-bottom: 20px;
  }
`

const LinkBlock = styled.div`
  display: flex;

  & > :nth-child(n) {
    margin-right: 31px;
  }

  > :nth-last-child(1) {
    margin-right: 0;
  }

  @media (max-width: ${Size.MOBILE_WIDTH}px) {
    flex-direction: column;
    align-content: center;
    margin-bottom: 50px;

    > :nth-child(n) {
      margin-bottom: 24px;
      margin-right: 0;
    }

    > :nth-last-child(1) {
      margin-bottom: 0;
    }
  }
`

const Link = styled.a`
  all: unset;
  cursor: pointer;
  text-align: center;
  display: flex;
  justify-content: space-evenly;

  &:hover {
    > div {
      border-bottom: 1px solid ${Color.white};
    }
  }
`
const Text = styled.div`
  text-align: center;
`
const ContainerForUnderline = styled.div`
  box-sizing: border-box;
  // a fixed height is needed so that when adding a border bottom, no additional
  // height is added and the screen does not twitch
  height: ${lineHeight};

  @media (max-width: ${Size.MOBILE_WIDTH}px) {
    height: ${lineHeightMobile};
  }
`

export const Styled = {
  ContainerForUnderline,
  Text,
  Container,
  LinkBlock,
  Link,
}
