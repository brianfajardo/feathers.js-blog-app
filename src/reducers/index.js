import { combineReducers } from 'redux'
import { reducer as formReducer } from 'redux-form'

import postsReducer from './postsReducer'
import authReducer from './authReducer'

const rootReducer = combineReducers({
  auth: authReducer,
  blog: postsReducer,
  form: formReducer
})

export default rootReducer
