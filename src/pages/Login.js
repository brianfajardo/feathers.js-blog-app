import React, { Component } from 'react'
import { reduxForm, Field } from 'redux-form'

import { loginFields } from '../constants/inputFields'
import { Form, Button } from 'semantic-ui-react'
import PageHeader from '../components/PageHeader'
import RegistrationModal from '../components/RegistrationModal'

class Login extends Component {
  constructor(props) {
    super(props)

    this.state = { showModal: false }

    this.onLoginSubmit = this.onLoginSubmit.bind(this)
    this.onToggleModal = this.onToggleModal.bind(this)
    this.onRegistrationSubmit = this.onRegistrationSubmit.bind(this)
  }

  onToggleModal() {
    this.setState({ showModal: !this.state.showModal })
  }

  onLoginSubmit(loginCredentials) {
    // Connect to Feather service and auth
    // Push to dashboard
    console.log('login credentials:', loginCredentials)
  }

  onRegistrationSubmit(registrationCredentials) {
    // Connect to Feather service, auth
    // Push to dashboard
    console.log('registration credentials:', registrationCredentials)
  }

  render() {
    const { showModal } = this.state
    const { handleSubmit } = this.props

    return (
      <div>
        {showModal && (
          <RegistrationModal
            showModal={showModal}
            onFormSubmit={this.onFormSubmit}
            onToggleModal={this.onToggleModal}
            onRegistrationSubmit={this.onRegistrationSubmit}
          />
        )}
        <div className="login-page">
          <div className="pageHeader">
            <PageHeader
              title="FeatherJS Blog"
              content="Welcome! Login to your account or register a new one with us to start blogging."
            />
          </div>
          <div>
            <Form onSubmit={handleSubmit(this.onLoginSubmit)}>
              {loginFields.map((field, i) => (
                <div key={i}>
                  <label>{field.label}</label>
                  <Field
                    name={field.name}
                    type={field.type}
                    component={field.component}
                    placeholder={field.placeholder}
                  />
                </div>
              ))}
              <Button type="submit">Login</Button>
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

export default reduxForm({
  form: 'login'
})(Login)
