import { takeEvery, all } from 'redux-saga/effects'

import login from './login'
import logout from './logout'
import addInvoice from './add-invoice'
import editInvoice from './edit-invoice'
import removeInvoice from './remove-invoice'
import { AUTH_REQUEST, AUTH_LOGOUT_REQUEST } from '../actions/auth'
import {
  INVOICES_ADD_REQUEST,
  INVOICES_EDIT_REQUEST,
  INVOICES_REMOVE_REQUEST
} from '../actions/invoices'

export default function * rootSaga () {
  yield all([
    takeEvery(AUTH_REQUEST, login),
    takeEvery(AUTH_LOGOUT_REQUEST, logout),
    takeEvery(INVOICES_ADD_REQUEST, addInvoice),
    takeEvery(INVOICES_EDIT_REQUEST, editInvoice),
    takeEvery(INVOICES_REMOVE_REQUEST, removeInvoice)
  ])
}
