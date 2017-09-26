// import fakePosts from './seed'
import { client, userService, postService } from './feathersClient'
import {
  AUTH_USER,
  AUTH_ERROR,
  AUTH_USER_LOGOUT,
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
    .then(({ user }) => {
      // accessToken automatically stored in localStorage.
      client.set('user', user)
      return dispatch({ type: AUTH_USER, payload: user })
    })
    .catch(err => console.log('user login error', err))
}

export const userSignUp = (registrationCredentials, history) => dispatch => {
  const { username, email, password } = registrationCredentials
  userService
    .create({ username, email, password })
    .then(() => {
      client
        .authenticate({
          strategy: 'local',
          email,
          password
        })
        .then(({ user }) => {
          client.set('user', user)
          return dispatch({ type: AUTH_USER, payload: user })
        })
    })
    .catch(err => console.log('action creator: userSignup', err))
}

export const fetchPosts = () => dispatch => {
  return dispatch({ type: FETCH_POSTS, payload: [] })
}

export const viewPostById = id => {
  return { type: VIEW_SINGLE_POST, payload: id }
}

export const userLogout = () => {
  client.logout()
  return { type: AUTH_USER_LOGOUT }
}
