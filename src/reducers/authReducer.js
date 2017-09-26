import {
  AUTH_USER,
  AUTH_ERROR,
  AUTH_USER_LOGOUT
} from '../constants/actionTypes'

const initialState = {
  authenticated: false,
  error: null,
  _id: null,
  username: null,
  email: null
}

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case AUTH_USER:
      return {
        ...state,
        authenticated: true,
        ...action.payload
      }
    case AUTH_USER_LOGOUT:
      return {
        ...state,
        ...initialState
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
