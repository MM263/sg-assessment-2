import React from 'react'
import { Router, Switch } from 'react-router-dom'
import createHistory from 'history/createBrowserHistory'

import PublicRoute from './public-route'
import PrivateRoute from './private-route'
import LoginPage from '../components/login-page'
import DashboardPage from '../components/dashboard'

export const history = createHistory()

const AppRouter = () => (
  <Router history={history}>
    <Switch>
      <PublicRoute path='/' component={LoginPage} exact />
      <PrivateRoute path='/dashboard' component={DashboardPage} />
    </Switch>
  </Router>
)

export default AppRouter
