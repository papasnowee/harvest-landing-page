import React from 'react'

import { GlobalStyle } from '@/ui/components/GlobalStyle'
import { MainPage } from '@/pages/MainPage/MainPage'

import { observer } from 'mobx-react'

import './styles/App.scss'

export const App = observer(() => {
  return (
    <>
      <GlobalStyle />
      <MainPage />
      <div>123333333333333333333</div>
    </>
  )
})
