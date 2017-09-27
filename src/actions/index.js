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

export const userSignUp = (
  { username, email, password },
  history
) => dispatch => {
  userService.create({ username, email, password }).then(() => {
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
      .catch(err => console.log('action creator: userSignup', err))
  })
}

export const fetchPosts = () => dispatch => {
  const jwt = localStorage.getItem('feathers-jwt')
  client.passport.verifyJWT(jwt).then(({ userId }) => {
    postService
      .find({ query: { userId } })
      .then(posts => dispatch({ type: FETCH_POSTS, payload: posts }))
      .catch(err => console.log('action creator: fetchPosts', err))
  })
}

export const viewPostById = id => {
  return { type: VIEW_SINGLE_POST, payload: id }
}

export const createPost = post => dispatch => {
  const { title, subtitle, content, keywords } = post
  const jwt = localStorage.getItem('feathers-jwt')
  // Splits string by spaces and/or commas
  const keywordsToArray = keywords.split(/[ ,]+/)

  return client.passport.verifyJWT(jwt).then(({ userId }) => {
    postService
      .create({ userId, title, subtitle, content, keywords: keywordsToArray })
      .catch(err => console.log('action creator: createPost', err))
  })
}

// export const deletePost = id => {}

export const userLogout = () => {
  client.logout()
  return { type: AUTH_USER_LOGOUT }
}
