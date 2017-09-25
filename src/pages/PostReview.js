import React, { Component } from 'react'

import { Link } from 'react-router-dom'
import { Button, Divider } from 'semantic-ui-react'
import PageHeader from '../components/PageHeader'

class PostReview extends Component {
  render() {
    return (
      <div className="postreview-page">
        <PageHeader
          title="Review"
          content="Almost there! You can read over your post here before submitting it."
        />
        <Divider />
        <div className="buttons">
          <Link to="/dashboard">
            <Button floated="right">Submit</Button>
          </Link>
          <Link to="/create_post">
            <Button floated="right">Edit</Button>
          </Link>
        </div>
      </div>
    )
  }
}

export default PostReview
