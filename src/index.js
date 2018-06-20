import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'

import AppRouter from './routers/app-router'
import configureStore from './store/configure-store'

const store = configureStore()

const app = (
  <Provider store={store}>
    <AppRouter />
  </Provider>
)

ReactDOM.render(app, document.getElementById('app'))
