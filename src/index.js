import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { AUTH_USER } from './constants/actionTypes'

// Styles
import 'semantic-ui-css/semantic.min.css'
import './styles/index.css'

import store from './store'
import Router from './Router'

// If a token is already stored, authenticate user!
if (localStorage.getItem('feathers-jwt')) {
  store.dispatch({ type: AUTH_USER })
}

ReactDOM.render(
  <Provider store={store}>
    <Router />
  </Provider>,
  document.getElementById('root')
)
