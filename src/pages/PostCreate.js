import React, { Component } from 'react'
import { reduxForm, Field } from 'redux-form'

import { createPostFields } from '../constants/inputFields'
import { Link } from 'react-router-dom'
import { Button, Divider, Form } from 'semantic-ui-react'
import PageHeader from '../components/PageHeader'

class PostCreate extends Component {
  constructor(props) {
    super(props)
    this.onPostSubmit = this.onPostSubmit.bind(this)
  }

  onPostSubmit(post) {
    // Connect to Feathers service, create post
    console.log('Post:', post)
  }

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
          <Form onSubmit={this.props.handleSubmit(this.onPostSubmit)}>
            {createPostFields.map((field, i) => (
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

export default reduxForm({
  form: 'createPost',
  destroyOnUnmount: false
})(PostCreate)
