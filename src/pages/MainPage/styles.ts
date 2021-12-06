import styled from 'styled-components'

import { Size } from '@/ui/style/size'

const Container = styled.div`
  ${() => {
    return `
      @media(max-width: ${Size.MOBILE_WIDTH}px) {
        width: 280px;
      }
      margin: 0 auto;
      width: 1160px;
`
  }}
`

export const Styled = {
  Container,
}
