import styled from 'styled-components'

import { Size } from '@/ui/style/size'

const LineWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 22px;
  height: 15px;
  margin: 0 auto;

  @media (min-width: ${Size.MOBILE_WIDTH + 1}px) {
    display: none;
  }
`
const ContainerAbsolute = styled.button`
  all: unset;
  width: 40px;
  height: 40px;
  position: absolute;
  left: 9px;

  cursor: pointer;
`
const Container = styled.div`
  position: relative;
  width: 40px;
  height: 40px;

  @media (min-width: ${Size.MOBILE_WIDTH + 1}px) {
    display: none;
  }
`
const Line = styled.div<{ color: string }>`
  ${(props) => {
    const { color } = props

    return `
    background: ${color};
    height: 2.2px;
    transition: background 0.4s;
    border-radius: 1.1px;
    `
  }}
`

export const Styled = {
  ContainerAbsolute,
  Container,
  LineWrapper,
  Line,
}
