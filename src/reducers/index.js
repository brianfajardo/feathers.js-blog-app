import { combineReducers } from 'redux'
import { reducer as formReducer } from 'redux-form'

import postsReducer from './postsReducer'

const rootReducer = combineReducers({
  blog: postsReducer,
  form: formReducer
})

export default rootReducer
