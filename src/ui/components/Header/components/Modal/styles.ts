import styled from 'styled-components'

import { Color } from '@/ui/style'

const Container = styled.div`
  position: fixed;
  overflow: hidden;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: stretch;
`

const LinksBlock = styled.div`
  width: 254px;
  height: 100%;
  background: #2a304d;
  backdrop-filter: blur(7px);
`
const LinkContainer = styled.ul`
  all: unset;
  margin-top: 163px;
  font-size: 16px;
  line-height: 20px;
  color: ${Color.white};
  height: 151px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
`

const CloseBlock = styled.div`
  flex-grow: 1;
  height: 100%;
  background: rgba(29, 34, 54, 0.31);
  backdrop-filter: blur(7px);
`

const ButtonContainer = styled.div`
  margin-top: 161px;
  display: flex;
  justify-content: space-evenly;
`

const Link = styled.a`
  all: unset;
  display: block;
  cursor: pointer;
  height: 40px;
  width: 120px;
  display: flex;
  align-items: center;
  justify-content: space-evenly;

  &:hover div {
    border-bottom: 1px solid ${Color.white};
  }
`
const SemanticLi = styled.li`
  all: unset;
  display: block;
`
export const Styled = {
  SemanticLi,
  Link,
  ButtonContainer,
  LinkContainer,
  Container,
  LinksBlock,
  CloseBlock,
}
