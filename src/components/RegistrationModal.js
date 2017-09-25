import React from 'react'

import { Modal, Header, Button, Icon, Form } from 'semantic-ui-react'

const RegistrationModal = ({ showModal, onToggleModal }) => (
  <Modal open={showModal} basic size="small" className="registrationModal">
    <Header icon="user circle outline" content="Sign up" size="huge" />
    <Modal.Content className="content">
      <Form>
        <Form.Field>
          <label>Enter your email:</label>
          <input type="text" name="email" placeholder="Email" />
        </Form.Field>
        <Form.Field>
          <label>Select a password:</label>
          <input type="password" name="password" placeholder="Password" />
        </Form.Field>
        <Modal.Actions>
          <div className="buttons">
            <Button basic color="red" inverted onClick={onToggleModal}>
              <Icon name="remove" /> Cancel
            </Button>
            <Button basic color="green" inverted type="submit">
              <Icon name="checkmark" /> Submit
            </Button>
          </div>
        </Modal.Actions>
      </Form>
    </Modal.Content>
  </Modal>
)

export default RegistrationModal
