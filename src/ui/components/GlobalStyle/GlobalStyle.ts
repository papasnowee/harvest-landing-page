import { createGlobalStyle } from 'styled-components'

import { palette, typography } from '@/ui/style'
const COMMON_STYLE = `
  margin: 0;
  padding: 0;
  height: 100%;
`

export const GlobalStyle = createGlobalStyle`
${() => {
    return `
    html {
      ${COMMON_STYLE}
    }

    body {
      ${COMMON_STYLE}
      background-size: 100%;
      background-repeat: no-repeat;
      background-image: url(src/pictures/mainPicture.png);
      background-color: ${palette.mainBackGroundColor};
      font-family: ${typography.textMain.fontFamily};
      font-weight: ${typography.textMain.fontWeight};
      overflow: visible;
    }
  `
  }}
`
