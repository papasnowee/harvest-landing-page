import { createGlobalStyle } from 'styled-components'

import { Color, typography } from '@/ui/style'
import { Size } from '@/ui/style/size'
const COMMON_STYLE = `
  margin: 0;
  padding: 0;
`

export const GlobalStyle = createGlobalStyle`
${() => {
    return `
    html {
      ${COMMON_STYLE}
    }

    body {
      ${COMMON_STYLE}
      background-color: ${Color.mainPageBackGroundColor};
      font-family: ${typography.textMain.fontFamily};
      font-weight: ${typography.textMain.fontWeight};
      overflow: visible;

      @media (max-width: ${Size.MOBILE_WIDTH}px) {
        overflow: hidden;
      }
    }
  `
  }}
`
