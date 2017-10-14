import axios from 'axios'
import feathers from 'feathers-client'

// Feathers setup for RESTful API and auth.
export const client = feathers()
  .configure(feathers.rest(process.env.REACT_APP_REST_CLIENT_URL).axios(axios))
  .configure(feathers.authentication({ storage: window.localStorage }))

// Referencing the server-side service.
export const userService = client.service('/user')
export const postService = client.service('/post')
