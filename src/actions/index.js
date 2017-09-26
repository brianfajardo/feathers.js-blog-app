import fakePosts from './seed'
import { client, userService, postService } from './feathersClient'
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
      // authenticated
      localStorage.setItem('auth: accessToken', accessToken)
      return client.passport.verifyJWT(accessToken)
    })
    .then(payload => {
      console.log('auth: JWT Payload', payload)
      return client.service('/user').get(payload.userId)
    })
    .then(user => {
      const { email, username, _id } = user
      console.log('auth: user', user)
      client.set('user', user)
      return dispatch({
        type: AUTH_USER,
        payload: { email, username, _id }
      })
    })
    .catch(err => dispatch({ type: AUTH_ERROR, payload: err }))
}

export const fetchPosts = () => dispatch => {
  return dispatch({ type: FETCH_POSTS, payload: fakePosts })
}

export const viewPostById = id => {
  return { type: VIEW_SINGLE_POST, payload: id }
}
