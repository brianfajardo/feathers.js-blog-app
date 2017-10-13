import { client, userService, postService } from './feathersClient'
import {
  AUTH_USER,
  FETCH_POSTS,
  AUTH_USER_LOGOUT,
  VIEW_SINGLE_POST
} from '../constants/actionTypes'

// User/auth-related action creators.

export const userSignUp = ({ username, email, password }, history) => dispatch => {
  userService
    .create({ username, email, password })
    .then(() => {
      /* Here, Feathers sets the JWT to localStorage as 'feathers-jwt' */
      client
        .authenticate({ strategy: 'local', email, password })
        .then(({ user }) => dispatch({ type: AUTH_USER, payload: user }))
        .catch(err => console.log('action creator: userSignup', err))
  })
}

export const userLogin = ({ email, password }) => dispatch => {
  client
    .authenticate({ strategy: 'local', email, password })
    .then(({ user }) => dispatch({ type: AUTH_USER, payload: user }))
    .catch(err => console.log('user login error', err))
}

export const userLogout = () => {
  client.logout() /* Removing JWT */
  return { type: AUTH_USER_LOGOUT }
}

// Post-related action creators.

export const createPost = ({ title, subtitle, content, keywords }) => {
  /* Returns an array of keywords delimited by spaces and commas. */
  const keywordsToArray = keywords.split(/[ ,]+/)

  client.passport
    .verifyJWT(localStorage.getItem('feathers-jwt'))
    .then(({ userId }) => {
      postService
        .create({ userId, title, subtitle, content, keywords: keywordsToArray })
        .catch(err => console.log('action creator: createPost', err))
  })
}

export const fetchPosts = () => dispatch => {
  client.passport
    /* Verify that JWT is not expired and decode it to expose user session. */
    .verifyJWT(localStorage.getItem('feathers-jwt'))
    .then(({ userId }) => {
      postService
        .find({ query: { userId } })
        .then(posts => dispatch({ type: FETCH_POSTS, payload: posts }))
        .catch(err => console.log('action creator: fetchPosts', err))
  })
}

export const viewPostById = id => {
  return { type: VIEW_SINGLE_POST, payload: id }
}

export const deletePost = (id, history) => {
  /* React-Router redirects browser to /dashboard after post deletion. */
  postService
    .remove(id)
    .then(() => history.push('/dashboard'))
    .catch(err => console.log('action creator: deletePost', err))
}
