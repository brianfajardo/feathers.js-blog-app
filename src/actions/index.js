import fakePosts from './seed'
import { client, userService } from './feathersClient'
import {
  AUTH_USER,
  AUTH_ERROR,
  FETCH_POSTS,
  VIEW_SINGLE_POST
} from '../constants/actionTypes'

export const userLogin = ({ email, password }) => dispatch => {
  client
    .authenticate({
      strategy: 'local',
      email,
      password
    })
    .then(({ accessToken }) => {
      localStorage.setItem('accessToken', accessToken)
      return dispatch({ type: AUTH_USER })
    })
    .catch(err => dispatch({ type: AUTH_ERROR, payload: err }))
}

export const fetchPosts = () => dispatch => {
  return dispatch({ type: FETCH_POSTS, payload: fakePosts })
}

export const viewPostById = id => {
  return { type: VIEW_SINGLE_POST, payload: id }
}
