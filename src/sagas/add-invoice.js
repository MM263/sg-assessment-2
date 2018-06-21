import { put } from 'redux-saga/effects'
import _ from 'lodash'

import { INVOICES_ADD } from '../actions/invoices'

export default function * ({ payload: { description, price } }) {
  yield put({
    type: INVOICES_ADD,
    invoice: {
      id: _.uniqueId('SGI-'),
      description,
      price
    }
  })
}
