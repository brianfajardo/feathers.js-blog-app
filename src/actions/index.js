import fakePosts from './seed'
import { FETCH_POSTS, VIEW_SINGLE_POST } from '../constants/actionTypes'

export const fetchPosts = () => dispatch => {
  // axios request
  return dispatch({ type: FETCH_POSTS, payload: fakePosts })
}

export const viewPostById = (id, history) => {
  history.push('/view_post')
  return { type: VIEW_SINGLE_POST, payload: id }
}
