import React from 'react'
import { Cards } from '@/ui/components/Cards'
import { ExchangeList } from '@/ui/components/ExchangeList'
import { FirstScreenBodyWeb, FirstScreenBodyMobile } from '@/ui/components/FirstScreenBody'
import { Player } from '@/ui/components/Player'
import { Ecosystem } from '@/ui/components/Ecosystem'
import { StartEarning } from '@/ui/components/StartEarning'

import { Styled } from './styles'
import { Audit } from '@/ui/components/Audit'
import { Community } from '@/ui/components/Community'
import { Footer } from '@/ui/components/Footer'
import { PeopleEarning } from '@/ui/components/PeopleEarning'

export const MainPage = () => {
  return (
    <Styled.Container>
      <FirstScreenBodyWeb />
      <FirstScreenBodyMobile />
      <ExchangeList />
      <PeopleEarning />
      <Player />
      <Ecosystem />
      <StartEarning />
      <Cards />
      <Audit />
      <Community />
      <Footer />
    </Styled.Container>
  )
}
