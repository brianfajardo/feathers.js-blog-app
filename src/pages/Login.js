import React, { Component } from 'react'

import { Link } from 'react-router-dom'
import { Form, Button } from 'semantic-ui-react'
import PageHeader from '../components/PageHeader'
import RegistrationModal from '../components/RegistrationModal'

class Login extends Component {
  constructor(props) {
    super(props)

    this.state = { showModal: false }

    this.onFormSubmit = this.onFormSubmit.bind(this)
    this.onToggleModal = this.onToggleModal.bind(this)
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
          onFormSubmit={this.onFormSubmit}
          onToggleModal={this.onToggleModal}
        />
        <div className="login-page">
          <div className="pageHeader">
            <PageHeader
              title="FeatherJS Blog"
              content="Welcome! Login to your account or register a new one with us to start blogging."
            />
          </div>
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
              <Link to="/dashboard">
                <Button>Login</Button>
              </Link>
            </Form>
          </div>
          <Button
            type="button"
            className="ui button"
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
