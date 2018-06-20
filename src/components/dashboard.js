import React, { Component } from 'react'
import { connect } from 'react-redux'

import { withStyles } from '@material-ui/core/styles'

import styles from '../styles/styles'

class Dashboard extends Component {
  render () {
    return (
      <div>p</div>
    )
  }
}

const DashboardPage = withStyles(styles)(Dashboard)

const mapStateToProps = state => ({
  invoices: state.invoices
})

export default connect(mapStateToProps)(DashboardPage)
