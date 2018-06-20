import { takeEvery, all } from 'redux-saga/effects'

import login from './login'

export default function * rootSaga () {
  yield all([
    takeEvery('*AUTH_REQUEST', login)
  ])
}
