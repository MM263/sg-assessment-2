import React, { Component } from 'react'
import { connect } from 'react-redux'

import { withStyles } from '@material-ui/core/styles'
import Paper from '@material-ui/core/Paper'
import Table from '@material-ui/core/Table'
import TableBody from '@material-ui/core/TableBody'
import TableCell from '@material-ui/core/TableCell'
import TableHead from '@material-ui/core/TableHead'
import TableRow from '@material-ui/core/TableRow'
import IconButton from '@material-ui/core/IconButton'
import Button from '@material-ui/core/Button'
import TextField from '@material-ui/core/TextField'
import Modal from '@material-ui/core/Modal'
import Card from '@material-ui/core/Card'
import CardContent from '@material-ui/core/CardContent'
import Edit from '@material-ui/icons/Edit'
import DeleteForever from '@material-ui/icons/DeleteForever'

import { onEditInvoice, onRemoveInvoice } from '../actions/invoices'
import styles from '../styles/styles'

class DashboardContent extends Component {
  state = {
    currentInvoice: null,
    editPrice: '',
    editDescription: '',
    editModalOpen: false
  }

  render () {
    const { invoices, classes } = this.props
    const {
      editPrice,
      editDescription,
      editModalOpen
    } = this.state

    return (
      <div>
        <Paper>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>ID</TableCell>
                <TableCell>Description</TableCell>
                <TableCell numeric>Price</TableCell>
                <TableCell />
              </TableRow>
            </TableHead>
            <TableBody>
              {invoices.map(invoice => {
                const { id, description, price } = invoice
                return (
                  <TableRow key={id}>
                    <TableCell>{id}</TableCell>
                    <TableCell>{description}</TableCell>
                    <TableCell numeric>{price}</TableCell>
                    <TableCell numeric>
                      <IconButton
                        onClick={() => this.onStartEdit(id, description, price)}
                      >
                        <Edit />
                      </IconButton>
                      <IconButton
                        onClick={() => this.onRemove(id)}
                      >
                        <DeleteForever />
                      </IconButton>
                    </TableCell>
                  </TableRow>
                )
              })}
            </TableBody>
          </Table>
        </Paper>
        <Modal
          open={editModalOpen}
          onClose={this.onCancelEdit}
        >
          <Card
            classes={{
              root: classes.editModal
            }}
          >
            <CardContent>
              <TextField
                fullWidth
                onChange={this.onChangeDescription}
                value={editDescription}
                label='Description'
              />
              <TextField
                classes={{
                  root: classes.textField
                }}
                fullWidth
                onChange={this.onChangePrice}
                value={editPrice}
                label='Price'
              />
              <div className={classes.actions}>
                <Button
                  onClick={this.onCancelEdit}
                >
                  Cancel
                </Button>
                <Button
                  classes={{
                    root: classes.saveButton
                  }}
                  onClick={this.onSave}
                  variant='raised'
                  color='primary'
                >
                  Save
                </Button>
              </div>
            </CardContent>
          </Card>
        </Modal>
      </div>
    )
  }

  onStartEdit = (id, description, price) => {
    this.setState({
      editModalOpen: true,
      currentInvoice: id,
      editDescription: description,
      editPrice: price
    })
  }

  onCancelEdit = () => {
    this.setState({
      editModalOpen: false,
      editPrice: '',
      editDescription: '',
      currentInvoice: null
    })
  }

  onChangeDescription = e => {
    const editDescription = e.target.value
    this.setState({ editDescription })
  }

  onChangePrice = e => {
    const editPrice = e.target.value
    if (!editPrice || editPrice.match(/^\d{1,}(\.\d{0,2})?$/)) {
      this.setState(() => ({ editPrice }))
    }
  }

  onSave = () => {
    const { currentInvoice, editDescription, editPrice } = this.state
    const { onEditInvoice } = this.props

    onEditInvoice(
      currentInvoice,
      {
        description: editDescription,
        price: editPrice
      }
    )
    this.onCancelEdit()
  }

  onRemove = id => {
    const { onRemoveInvoice } = this.props

    onRemoveInvoice(id)
  }
}

const mapStateToProps = state => ({
  invoices: state.invoices
})

const mapDispatchToProps = dispatch => ({
  onEditInvoice: (id, updates) => dispatch(onEditInvoice(id, updates)),
  onRemoveInvoice: id => dispatch(onRemoveInvoice(id))
})

const DashboardContentComponent = withStyles(styles)(DashboardContent)

export default connect(mapStateToProps, mapDispatchToProps)(DashboardContentComponent)
