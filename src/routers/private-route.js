import React from 'react'
import { connect } from 'react-redux'
import { Route, Redirect } from 'react-router-dom'

const PrivateRoute = ({ authenticated, component: Component, ...rest }) => (
  <Route
    {...rest}
    component={props =>
      (authenticated ? (
        <div>
          <Component {...props} />
        </div>
      ) : (
        <Redirect to='/' />
      ))
    }
  />
)

const mapStateToProps = state => ({
  authenticated: state.auth.authenticated
})

export default connect(mapStateToProps)(PrivateRoute)
