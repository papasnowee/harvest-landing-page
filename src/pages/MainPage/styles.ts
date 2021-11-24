import styled from 'styled-components'

import { Size } from '@/ui/style/size'

const Container = styled.div`
  ${() => {
    return `
      @media(max-width: ${Size.MOBILE_WIDTH}px) {
        width: ${Size.MOBILE_WIDTH}px;
        padding: 
      }

      width: 1160px;
`
  }}
`

export const Styled = {
  Container,
}
