import { FETCH_POSTS, VIEW_SINGLE_POST } from '../constants/actionTypes'

const initialState = {
  posts: [],
  viewPostID: null
}

const postsReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_POSTS:
      return {
        ...state,
        posts: action.payload
      }
    case VIEW_SINGLE_POST:
      return {
        ...state,
        viewPostID: action.payload
      }
    default:
      return state
  }
}

export default postsReducer
