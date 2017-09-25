import fakePosts from './seed'

// Action Types
export const FETCH_POSTS = 'pepperoni pizza'
export const VIEW_SINGLE_POST = 'canadian pizza'

export const fetchPosts = () => dispatch => {
  // axios request
  return dispatch({ type: FETCH_POSTS, payload: fakePosts })
}

export const viewPostById = (id, history) => {
  history.push('/view_post')
  return { type: VIEW_SINGLE_POST, payload: id }
}
