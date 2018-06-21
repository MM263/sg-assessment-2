import React, { Component } from 'react'
import { connect } from 'react-redux'

import Card from '@material-ui/core/Card'
import CardContent from '@material-ui/core/CardContent'
import Button from '@material-ui/core/Button'
import TextField from '@material-ui/core/TextField'
import { withStyles } from '@material-ui/core/styles'
import styles from '../styles/styles'
import { onAddInvoice } from '../actions/invoices'

class DashboardActions extends Component {
  state = {
    description: '',
    price: ''
  }

  render () {
    const { classes } = this.props
    const { description, price } = this.state

    return (
      <Card
        classes={{
          root: classes.dashboardActions
        }}
      >
        <CardContent
          classes={{
            root: classes.dashboardActionsContent
          }}
        >
          <TextField
            value={description}
            onChange={this.onChangeDescription}
            InputLabelProps={{
              shrink: true
            }}
            label='Description'
            style={{ flex: '1' }}
          />
          <TextField
            value={price}
            onChange={this.onChangePrice}
            InputLabelProps={{
              shrink: true
            }}
            label='Price'
            style={{ flex: '1' }}
            classes={{
              root: classes.saveButton
            }}
          />
          <Button
            onClick={this.onAdd}
            disabled={price === '' || description === ''}
            variant='raised'
            color='primary'
            classes={{
              root: classes.saveButton
            }}
          >
            Add
          </Button>
        </CardContent>
      </Card>
    )
  }

  onChangeDescription = e => {
    const description = e.target.value
    this.setState({ description })
  }

  onChangePrice = e => {
    const price = e.target.value
    if (!price || price.match(/^\d{1,}(\.\d{0,2})?$/)) {
      this.setState(() => ({ price }))
    }
  }

  onAdd = () => {
    const { price, description } = this.state
    const { onAddInvoice } = this.props

    onAddInvoice(description, price)
    this.setState({ price: '', description: '' })
  }
}

const mapDispatchToProps = dispatch => ({
  onAddInvoice: (description, price) => dispatch(onAddInvoice(description, price))
})

const DashboardActionsComponent = withStyles(styles)(DashboardActions)

export default connect(null, mapDispatchToProps)(DashboardActionsComponent)
