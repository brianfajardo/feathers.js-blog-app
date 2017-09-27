import { AUTH_USER, AUTH_USER_LOGOUT } from '../constants/actionTypes'

const initialState = {
  authenticated: false,
  user: {}
}

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case AUTH_USER:
      return {
        ...state,
        authenticated: true,
        user: action.payload
      }
    case AUTH_USER_LOGOUT:
      return {
        ...state,
        ...initialState
      }
    default:
      return state
  }
}

export default authReducer
