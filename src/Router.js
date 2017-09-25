import React from 'react'
import { BrowserRouter, Route } from 'react-router-dom'

import { Container } from 'semantic-ui-react'
import Login from './pages/Login'

const Router = () => (
  <BrowserRouter>
    <Container>
      <Route exact path="/" component={Login} />
    </Container>
  </BrowserRouter>
)

export default Router
