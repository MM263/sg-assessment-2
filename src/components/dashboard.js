import React, { Component } from 'react'
import { connect } from 'react-redux'

import { withStyles } from '@material-ui/core/styles'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import Button from '@material-ui/core/Button'

import DashboardActions from './dashboard-actions'
import DashboardContent from './dashboard-content'
import { onLogout } from '../actions/auth'
import styles from '../styles/styles'

class Dashboard extends Component {
  render () {
    const { classes } = this.props

    return (
      <div>
        <AppBar position='static'>
          <Toolbar>
            <Typography
              variant='title'
              color='inherit'
              className={classes.appBar_title}
            >
                SG-Assessment 2: Electric Boogaloo
            </Typography>
            <Button
              color='inherit'
              onClick={this.onLogout}
            >
                Logout
            </Button>
          </Toolbar>
        </AppBar>
        <div className={classes.dashboardContent}>
          <DashboardActions />
          <DashboardContent />
        </div>
      </div>
    )
  }

  onLogout = e => {
    const { onLogout } = this.props

    onLogout()
  }
}

const DashboardPage = withStyles(styles)(Dashboard)

const mapDispatchToProps = dispatch => ({
  onLogout: () => dispatch(onLogout())
})

export default connect(null, mapDispatchToProps)(DashboardPage)
