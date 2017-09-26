import fakePosts from './seed'
import { client, userService } from './feathersClient'
import { FETCH_POSTS, VIEW_SINGLE_POST } from '../constants/actionTypes'

export const userLogin = ({ email, password }) => dispatch => {
  client
    .authenticate({
      strategy: 'local',
      email,
      password
    })
    .then(resp => console.log(resp))
    .catch(err => console.log(err))
}

export const fetchPosts = () => dispatch => {
  return dispatch({ type: FETCH_POSTS, payload: fakePosts })
}

export const viewPostById = id => {
  return { type: VIEW_SINGLE_POST, payload: id }
}
