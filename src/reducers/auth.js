import { AUTH_SUCCESS, AUTH_FAILED, AUTH_LOGOUT } from '../actions/auth'

const initialState = {
  authenticated: false,
  error: null
}

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case AUTH_SUCCESS:
      return {
        authenticated: true,
        error: null
      }

    case AUTH_FAILED:
      return {
        authenticated: false,
        error: action.error
      }

    case AUTH_LOGOUT:
      return {
        authenticated: false,
        error: null
      }

    default:
      return state
  }
}

export default reducer
