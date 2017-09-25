import React from 'react'
import { reduxForm, Field } from 'redux-form'

import { registrationFields } from '../constants/inputFields'
import { Modal, Button, Icon, Form } from 'semantic-ui-react'

const RegistrationModal = ({
  showModal,
  onToggleModal,
  handleSubmit,
  onRegistrationSubmit
}) => (
  <Modal open={showModal} basic size="small" className="registrationModal">
    <p>
      <Icon name="user circle outline" />
      Sign up
    </p>
    <Modal.Content className="content">
      <Form onSubmit={handleSubmit(onRegistrationSubmit)}>
        {registrationFields.map((field, i) => (
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
        <div className="buttons">
          <Button basic color="red" inverted onClick={onToggleModal}>
            <Icon name="remove" /> Cancel
          </Button>
          <Button basic color="green" inverted type="submit">
            <Icon name="checkmark" /> Submit
          </Button>
        </div>
      </Form>
    </Modal.Content>
  </Modal>
)

export default reduxForm({
  form: 'newUser',
  destroyOnUnmount: true
})(RegistrationModal)
