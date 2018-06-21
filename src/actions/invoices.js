export const INVOICES_ADD_REQUEST = '*INVOICES_ADD_REQUEST'
export const INVOICES_REMOVE_REQUEST = '*INVOICES_REMOVE_REQUEST'
export const INVOICES_EDIT_REQUEST = '*INVOICES_EDIT_REQUEST'
export const INVOICES_ADD = 'INVOICES_ADD'
export const INVOICES_REMOVE = 'INVOICES_REMOVE'
export const INVOICES_EDIT = 'INVOICES_EDIT'

// The thought process behind making saga requests and not flat out writing is
// that one wants to make API calls in redux-saga and writing, editing can sometimes
// fail and saga allows for better handling of situations like this

export const onEditInvoice = (id, updates) => ({
  type: INVOICES_EDIT_REQUEST,
  payload: { id, updates }
})

export const onRemoveInvoice = id => ({
  type: INVOICES_REMOVE_REQUEST,
  payload: { id }
})

export const onAddInvoice = (description, price) => ({
  type: INVOICES_ADD_REQUEST,
  payload: { description, price }
})
