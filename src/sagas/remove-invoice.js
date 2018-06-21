import { put } from 'redux-saga/effects'

import { INVOICES_REMOVE } from '../actions/invoices'

export default function * ({ payload: { id } }) {
  yield put({
    type: INVOICES_REMOVE,
    id
  })
}
