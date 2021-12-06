import React from 'react'

import { GlobalStyle } from '@/ui/components/GlobalStyle'
import { MainPage } from '@/pages/MainPage/MainPage'

import { observer } from 'mobx-react'

import { Styled } from './styles'
import { Header } from '@/ui/components/Header'
import { Background } from '@/ui/components/Background'

export const App = observer(() => {
  return (
    <>
      <Header />
      <Background />
      <GlobalStyle />
      <Styled.Container>
        <MainPage />
      </Styled.Container>
    </>
  )
})
