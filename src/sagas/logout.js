import { put } from 'redux-saga/effects'

import { AUTH_LOGOUT } from '../actions/auth'

export default function * () {
  const storage = window.localStorage

  yield put({ type: AUTH_LOGOUT })

  storage.removeItem('login')
  storage.removeItem('password')
}
