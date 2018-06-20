import React from 'react'
import { connect } from 'react-redux'
import { Route, Redirect } from 'react-router-dom'

const PublicRoute = ({ authenticated, component: Component, ...rest }) => (
  <Route
    {...rest}
    component={() => (authenticated ? <Redirect to='/dashboard' /> : <Component />)}
  />
)

const mapStateToProps = state => ({
  authenticated: state.auth.authenticated
})

export default connect(mapStateToProps)(PublicRoute)
