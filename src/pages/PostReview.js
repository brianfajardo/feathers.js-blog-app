import React, { Component } from 'react'
import { connect } from 'react-redux'
import { reset } from 'redux-form'
import store from '../store'
import { createPost } from '../actions'

// Components
import { Link, withRouter } from 'react-router-dom'
import { Button, Divider } from 'semantic-ui-react'
import PageHeader from '../components/PageHeader'

class PostReview extends Component {
  constructor(props) {
    super(props)
    this.onPostSubmit = this.onPostSubmit.bind(this)
  }

  onPostSubmit() {
    this.props.createPost(this.props.reviewPost.values)
    store.dispatch(reset('createPost'))
    this.props.history.push('/dashboard')
  }

  render() {
    const { values } = this.props.reviewPost
    return (
      <div className="postreview-page">
        <div>
          <PageHeader
            title="Review"
            content="Almost there! You can read over your post here before submitting it."
          />
          <Divider />
          <div className="content-container">
            <div className="content-details">
              <p>Keywords:</p>
              <p>{values.keywords}</p>
            </div>
            <div className="content-body">
              <p>{values.title}</p>
              <p>{values.subtitle}</p>
              <p>{values.content}</p>
            </div>
          </div>
          <div className="buttons">
            <Button onClick={this.onPostSubmit} floated="right">
              Submit
            </Button>
            <Link to="/create_post">
              <Button floated="right">Edit</Button>
            </Link>
          </div>
        </div>
      </div>
    )
  }
}

const mapStateToProps = state => {
  const reviewPost = state.form.createPost
  return { reviewPost }
}

export default connect(mapStateToProps, { createPost })(withRouter(PostReview))
