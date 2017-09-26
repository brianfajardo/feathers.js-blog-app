import React, { Component } from 'react'
import { reduxForm, Field } from 'redux-form'
import { validateLogin } from '../utils/reduxFormValidations'
import { loginFields } from '../constants/inputFields'
import { connect } from 'react-redux'
import * as actions from '../actions'

// Components
import FormField from '../components/FormField'
import PageHeader from '../components/PageHeader'
import RegistrationModal from '../components/RegistrationModal'
import { Form, Button, Icon, Divider } from 'semantic-ui-react'

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
    this.props.userLogin(loginCredentials)
  }

  onRegistrationSubmit(registrationCredentials) {
    // Connect to Feather service, auth
    // Push to dashboard
    console.log('registration credentials:', registrationCredentials)
  }

  render() {
    const { showModal } = this.state
    const { handleSubmit } = this.props
    console.log(this.props.form.meta)

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
          <div className="oauth-login">
            <Icon name="facebook square" />
            <Icon name="google plus square" />
          </div>
          <Divider horizontal>Or</Divider>
          <div>
            <Form onSubmit={handleSubmit(this.onLoginSubmit)}>
              {loginFields.map((field, i) => (
                <div key={i}>
                  <label>{field.label}</label>
                  <Field
                    name={field.name}
                    type={field.type}
                    component={FormField}
                    componentType={field.component}
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

const LoginWithReduxForm = reduxForm({
  form: 'login',
  validate: validateLogin,
  destroyOnUnmount: true
})(Login)

export default connect(null, actions)(LoginWithReduxForm)
