import React, { Component } from 'react'
import store from '../store'
import { reduxForm, Field, reset } from 'redux-form'
import { createPostFields } from '../constants/inputFields'
import { validatePost } from '../utils/reduxFormValidations'

// Components
import { Link } from 'react-router-dom'
import { Button, Divider, Form } from 'semantic-ui-react'
import FormField from '../components/FormField'
import PageHeader from '../components/PageHeader'

class PostCreate extends Component {
  constructor(props) {
    super(props)
    this.state = { showReview: false }
    this.onPostSubmit = this.onPostSubmit.bind(this)
  }

  onPostSubmit(post) {
    this.props.history.push('/review_post')
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
                  component={FormField}
                  componentType={field.component}
                  placeholder={field.placeholder}
                />
              </div>
            ))}
            <div className="buttons">
              <Link
                to="/dashboard"
                onClick={() => store.dispatch(reset('createPost'))}
              >
                <Button>Cancel</Button>
              </Link>
              <Button type="submit">Review</Button>
            </div>
          </Form>
        </div>
      </div>
    )
  }
}

export default reduxForm({
  form: 'createPost',
  validate: validatePost,
  destroyOnUnmount: false
})(PostCreate)
