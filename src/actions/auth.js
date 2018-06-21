export const AUTH_REQUEST = '*AUTH_REQUEST'
export const AUTH_LOGOUT_REQUEST = '*AUTH_LOGOUT_REQUEST'
export const AUTH_SUCCESS = 'AUTH_SUCCESS'
export const AUTH_FAILED = 'AUTH_FAILED'
export const AUTH_LOGOUT = 'AUTH_LOGOUT'

export const onLogin = (login, password) => ({
  type: AUTH_REQUEST,
  payload: { login, password }
})

export const onLogout = () => ({
  type: AUTH_LOGOUT_REQUEST
})
