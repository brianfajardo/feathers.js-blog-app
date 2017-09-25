import { combineReducers } from 'redux'

import postsReducer from './postsReducer'

const rootReducer = combineReducers({
  blog: postsReducer
})

export default rootReducer
