import { ExchangeList } from '@/ui/components/ExchangeList'
import { FirstScreenBodyWeb, FirstScreenBodyMobile } from '@/ui/components/FirstScreenBody'
import React from 'react'

import { Styled } from './styles'

export const MainPage = () => {
  return (
    <Styled.Container>
      <FirstScreenBodyWeb />
      <FirstScreenBodyMobile />
      <ExchangeList />
    </Styled.Container>
  )
}
