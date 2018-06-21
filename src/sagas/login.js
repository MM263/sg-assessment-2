import { put } from 'redux-saga/effects'

import loginCredentials from '../fixtures/login-credentials'
import { AUTH_SUCCESS, AUTH_FAILED } from '../actions/auth'

export default function * ({ payload: { login, password } }) {
  const { login: storedLogin, password: storedPassword } = loginCredentials

  // This should be an API call with "yield call"
  if (login === storedLogin && password === storedPassword) {
    const storage = window.localStorage

    yield put({ type: AUTH_SUCCESS })

    // Praised be storing password in local storage in plain text
    storage.setItem('login', login)
    storage.setItem('password', password)
    return
  }

  yield put({ type: AUTH_FAILED, error: 'Wrong login or password' })
}
