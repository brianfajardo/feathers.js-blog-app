import React, { Component } from 'react'

import { Link } from 'react-router-dom'
import { Button, Divider, Form, TextArea } from 'semantic-ui-react'
import PageHeader from '../components/PageHeader'

class PostCreate extends Component {
  render() {
    return (
      <div className="postcreate-page">
        <div>
          <PageHeader
            title="Create Post"
            content="What do you want to write about today?"
          />
          <Divider />
        </div>
        <div>
          <Form>
            <Form.Field>
              <label>Give it a creative title</label>
              <input type="text" placeholder="title" />
            </Form.Field>
            <Form.Field>
              <label>Enter some keywords</label>
              <input type="text" placeholder="keywords" />
            </Form.Field>
            <Form.Field>
              <label>Write</label>
              <TextArea placeholder="Once upon a time..." rows={15} />
            </Form.Field>
            <div className="buttons">
              <Link to="/dashboard">
                <Button>Cancel</Button>
              </Link>
              <Link to="/review_post">
                <Button>Review</Button>
              </Link>
            </div>
          </Form>
        </div>
      </div>
    )
  }
}

export default PostCreate
