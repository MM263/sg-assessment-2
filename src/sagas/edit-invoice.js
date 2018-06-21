import { put } from 'redux-saga/effects'

import { INVOICES_EDIT } from '../actions/invoices'

export default function * ({ payload: { id, updates } }) {
  yield put({
    type: INVOICES_EDIT,
    id,
    updates
  })
}
