import { createStore, combineReducers, applyMiddleware, compose } from 'redux'
import createSagaMiddleware from 'redux-saga'

import auth from '../reducers/auth'
import invoices from '../reducers/invoices'
import rootSaga from '../sagas'

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

export default () => {
  const sagaMiddleware = createSagaMiddleware()

  const store = createStore(
    combineReducers({
      auth,
      invoices
    }),
    composeEnhancers(applyMiddleware(sagaMiddleware))
  )
  sagaMiddleware.run(rootSaga)

  return store
}
