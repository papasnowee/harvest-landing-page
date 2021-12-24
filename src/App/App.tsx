import React, { useRef } from 'react'

import { GlobalStyle } from '@/ui/components/GlobalStyle'
import { MainPage } from '@/pages/MainPage/MainPage'
import { Header } from '@/ui/components/Header'
import { Background } from '@/ui/components/Background'
import { Styled } from './styles'

export const App = () => {
  const modalRoot = useRef(null)

  return (
    // This container is needed for footer-picture correctly positioning footer picture.
    <Styled.Container>
      <Styled.ModalRoot id="modal-root" ref={modalRoot} />
      <Header modalRoot={modalRoot} />
      <Background />
      <GlobalStyle />
      <MainPage />
    </Styled.Container>
  )
}
