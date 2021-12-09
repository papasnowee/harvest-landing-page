import React, { useRef } from 'react'

import { GlobalStyle } from '@/ui/components/GlobalStyle'
import { MainPage } from '@/pages/MainPage/MainPage'

import { observer } from 'mobx-react'

import { Styled } from './styles'
import { Header } from '@/ui/components/Header'
import { Background } from '@/ui/components/Background'
import { useStores } from '@/stores/utils'

export const App = observer(() => {
  const { appStore } = useStores()

  const portalRef = useRef(null)

  appStore.setRef(portalRef)

  return (
    <>
      <Styled.Modal id="modal-root" />
      <Header />
      <Background />
      <GlobalStyle />
      <Styled.Container>
        <MainPage />
      </Styled.Container>
    </>
  )
})
