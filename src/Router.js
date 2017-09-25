import React from 'react'
import { BrowserRouter, Route } from 'react-router-dom'

import { Container } from 'semantic-ui-react'
import Login from './pages/Login'
import Dashboard from './pages/Dashboard'
import PostCreate from './pages/PostCreate'
import PostReview from './pages/PostReview'

const Router = () => (
  <BrowserRouter>
    <Container className="container">
      <Route exact path="/" component={Login} />
      <Route exact path="/dashboard" component={Dashboard} />
      <Route exact path="/create_post" component={PostCreate} />
      <Route exact path="/review_post" component={PostReview} />
    </Container>
  </BrowserRouter>
)

export default Router
