import styled from 'styled-components'

import { Theme } from '@/ui/themes'

const Wrapper = styled.div`
  ${({ theme: { palette } }: { theme: Theme }) => {
    return `
      display: grid;
      justify-content: start;
      justify-items: flex-start;
      align-items: flex-start;
      grid-template-columns: repeat(auto-fill, minmax(125px, auto));
      grid-gap: 20px;
      width: 100%;
      min-width: 300px;
      padding: 20px;
      background: ${palette.surface};
    `
  }}
`
export const Styled = {
  Wrapper,
}
