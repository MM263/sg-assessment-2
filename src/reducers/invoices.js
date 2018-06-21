import invoices from '../fixtures/invoices'
import {
  INVOICES_ADD,
  INVOICES_REMOVE,
  INVOICES_EDIT
} from '../actions/invoices'

export default (state = invoices, action) => {
  switch (action.type) {
    case INVOICES_ADD:
      return [...state, action.invoice]
    case INVOICES_REMOVE:
      return state.filter(invoice => invoice.id !== action.id)
    case INVOICES_EDIT:
      return state.map(invoice => {
        if (invoice.id === action.id) {
          return {
            ...invoice,
            ...action.updates
          }
        }
        return invoice
      })
    default:
      return state
  }
}
