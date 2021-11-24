import styled from 'styled-components'

const HeaderContainer = styled.header`
  ${() => {
    return `
      border: 1px solid black;
      padding: 0 140px;
      display: flex;
      justify-content: space-between;
    `
  }}
`

export const Styled = {
  HeaderContainer,
}
