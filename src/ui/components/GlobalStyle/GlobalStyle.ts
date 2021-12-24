import { createGlobalStyle } from 'styled-components'

import { Color, FontFamily } from '@/ui/style'

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
      font-family: ${FontFamily.MAIN};
      overflow: visible;
    }
  `
}}
`
