export const onLogin = (login, password) => ({
  type: '*AUTH_REQUEST',
  payload: { login, password }
})
