import React from 'react'
import { Cards } from '@/ui/components/Cards'
import { ExchangeList } from '@/ui/components/ExchangeList'
import { FirstScreenBodyWeb, FirstScreenBodyMobile } from '@/ui/components/FirstScreenBody'
import { Player } from '@/ui/components/Player'
import { Protocols } from '@/ui/components/Protocols/Protocols'
import { StartEarning } from '@/ui/components/StartEarning'

import { Styled } from './styles'

export const MainPage = () => {
  return (
    <Styled.Container>
      <FirstScreenBodyWeb />
      <FirstScreenBodyMobile />
      <ExchangeList />
      <Player />
      <Protocols />
      <StartEarning />
      <Cards />
    </Styled.Container>
  )
}
