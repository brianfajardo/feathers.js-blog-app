import React, { Component } from 'react'

import { Header, Form, Button } from 'semantic-ui-react'
import RegistrationModal from '../components/RegistrationModal'

class Login extends Component {
  constructor(props) {
    super(props)

    this.state = { showModal: false }

    this.onToggleModal = this.onToggleModal.bind(this)
    this.onFormSubmit = this.onFormSubmit.bind(this)
  }

  onToggleModal() {
    this.setState({ showModal: !this.state.showModal })
  }

  onFormSubmit(info) {
    console.log(info)
  }

  render() {
    const { showModal } = this.state

    return (
      <div>
        <RegistrationModal
          showModal={showModal}
          onToggleModal={this.onToggleModal}
          onFormSubmit={this.onFormSubmit}
        />
        <div className="login-page">
          <Header as="h4" className="header">
            FeatherJS Blog
          </Header>
          <Header as="h3" className="header">
            Welcome! Login to your account or register a new one with us to
            start blogging.
          </Header>
          <div>
            <Form>
              <Form.Field>
                <label>Email</label>
                <input type="text" name="email" placeholder="Email" />
              </Form.Field>
              <Form.Field>
                <label>Password</label>
                <input type="password" name="password" placeholder="Password" />
              </Form.Field>
              <Button type="submit">Login</Button>
            </Form>
          </div>
          <Button
            className="ui button"
            type="button"
            onClick={this.onToggleModal}
          >
            Sign up
          </Button>
        </div>
      </div>
    )
  }
}

export default Login
