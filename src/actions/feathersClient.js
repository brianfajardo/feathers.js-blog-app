import axios from 'axios'
import feathers from 'feathers-client'
import localStorage from 'localstorage-memory'

const DEV_URL = 'http://localhost:3030'

// Feathers setup for rest and auth
export const client = feathers()
  .configure(feathers.hooks())
  .configure(feathers.rest(DEV_URL).axios(axios))
  .configure(feathers.authentication({ storage: localStorage }))

export const userService = client.service('/user')
