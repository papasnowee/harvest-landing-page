import styled from 'styled-components'

const Container = styled.div`
  position: relative;
`

const ModalRoot = styled.div`
  z-index: 10;
  position: fixed;
  top: 0;
`
const Hidden = styled.div`
  z-index: -9;
  position: absolute;
`
export const Styled = {
  Hidden,
  Container,
  ModalRoot,
}
