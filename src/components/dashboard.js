import React, { Component } from 'react'
import { connect } from 'react-redux'

import { withStyles } from '@material-ui/core/styles'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import Button from '@material-ui/core/Button'

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
            >
              Logout
            </Button>
          </Toolbar>
        </AppBar>
      </div>
    )
  }

  onLogout = e => {

  }
}

const DashboardPage = withStyles(styles)(Dashboard)

const mapStateToProps = state => ({
  invoices: state.invoices
})

export default connect(mapStateToProps)(DashboardPage)
