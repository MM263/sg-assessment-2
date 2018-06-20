const initialState = {
  authenticated: false,
  error: null
}

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'AUTH_SUCCESS':
      return {
        authenticated: true,
        error: null
      }

    case 'AUTH_FAILED':
      return {
        authenticated: false,
        error: action.error
      }

    default:
      return state
  }
}

export default reducer
