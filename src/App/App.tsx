import React, { useRef } from 'react'

import { GlobalStyle } from '@/ui/components/GlobalStyle'
import { MainPage } from '@/pages/MainPage/MainPage'
import { Header } from '@/ui/components/Header'
import { Background } from '@/ui/components/Background'
import { Styled } from './styles'
import { Icon } from '@/ui/components/FriendlyCompanies/components/Companies/Icon'
export const App = () => {
  const modalRoot = useRef<any>(null)

  return (
    // This container is needed for footer-picture correctly positioning footer picture.
    <Styled.Container>
      {/* it needs for correct showing these icons in the Ecosystem and FriendlyCompanies components in mobile version
      TODO: fix it */}
      <Styled.Hidden>
        <Icon iconName="sushiswap" />
        <Icon iconName="curve" />
        <Icon iconName="uniswap" />
        <Icon iconName="compound" />
        <Icon iconName="kyber" />
      </Styled.Hidden>
      <Styled.ModalRoot id="modal-root" ref={modalRoot} />
      <Header modalRoot={modalRoot} />
      <Background />
      <GlobalStyle />
      <MainPage />
    </Styled.Container>
  )
}
