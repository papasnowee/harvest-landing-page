import React from 'react'
import ReactDOM from 'react-dom'
import { BaseCSS } from 'styled-bootstrap-grid'
import { App } from './App'
import { Provider as MobxProvider } from 'mobx-react'

ReactDOM.render(
  <>
    <MobxProvider>
      <BaseCSS />
      <App />
    </MobxProvider>
  </>,
  document.getElementById('root'),
)
