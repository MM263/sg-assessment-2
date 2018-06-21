import invoices from '../fixtures/invoices'

const invoicesReducerDefaultState = invoices

export default (state = invoicesReducerDefaultState, action) => {
  switch (action.type) {
    case 'ADD_INVOICE':
      return [...state, action.invoice]
    case 'REMOVE_INVOICE':
      return state.filter(({ id }) => id !== action.id)
    case 'EDIT_INVOICE':
      return state.map((invoice) => {
        if (invoice.id === action.id) {
          return {
            ...invoice,
            ...action.updates
          }
        }
        return invoice
      })
    case 'MERGE_INVOICES':
      return {
        ...state,
        ...action.updates
      }
    default:
      return state
  }
}
