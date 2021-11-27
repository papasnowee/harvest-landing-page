import React from 'react'

import { GlobalStyle } from '@/ui/components/GlobalStyle'
import { MainPage } from '@/pages/MainPage/MainPage'

import { observer } from 'mobx-react'

import { Styled } from './styles'

export const App = observer(() => {
  return (
    <>
      <GlobalStyle />
      <Styled.Container>
        <MainPage />
      </Styled.Container>
    </>
  )
})
