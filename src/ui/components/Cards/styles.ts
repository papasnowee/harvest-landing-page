import styled from 'styled-components'

import { Size } from '@/ui/style/size'

const Container = styled.div`
  margin-top: 100px;
  display: flex;
  justify-content: space-between;

  @media (max-width: ${Size.MOBILE_WIDTH}px) {
    margin-top: 50px;
    flex-direction: column;

    & div {
      margin-bottom: 20px;
    }

    & div:nth-last-child(1) {
      margin-bottom: 0;
    }
  }
`

export const Styled = {
    Container,
}
