import { FirstScreenBody } from '@/ui/components/FirstScreenBody'
import { Header } from '@/ui/components/Header'
import React from 'react'

import { Styled } from './styles'

export const MainPage = () => {
  return (
    <Styled.Container>
      <Header />
      <FirstScreenBody />
    </Styled.Container>
  )
}
