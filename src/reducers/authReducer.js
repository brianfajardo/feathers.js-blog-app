import { AUTH_USER, AUTH_ERROR } from '../constants/actionTypes'

const initialState = {
  authenticated: false,
  error: ''
}

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case AUTH_USER:
      return {
        ...state,
        authenticated: true
      }
    case AUTH_ERROR:
      return {
        ...state,
        error: action.payload
      }
    default:
      return state
  }
}

export default authReducer
