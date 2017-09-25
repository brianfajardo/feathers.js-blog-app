import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'

// Styles
import 'semantic-ui-css/semantic.min.css'
import './styles/index.css'

import store from './store'
import Router from './Router'

ReactDOM.render(
  <Provider store={store}>
    <Router />
  </Provider>,
  document.getElementById('root')
)
