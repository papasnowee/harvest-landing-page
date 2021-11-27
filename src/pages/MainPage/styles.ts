import styled from 'styled-components'

import { Size } from '@/ui/style/size'

const Container = styled.div`
  ${() => {
    return `
      @media(max-width: ${Size.MOBILE_WIDTH}px) {
        width: ${Size.MOBILE_HORIZONTAL_MIN_WIDTH}px;
        padding: 
      }
      margin: 0 auto;
      width: 1160px;
`
  }}
`

export const Styled = {
  Container,
}
