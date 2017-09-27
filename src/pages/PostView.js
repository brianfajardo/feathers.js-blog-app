import React, { Component } from 'react'
import { connect } from 'react-redux'
import { deletePost } from '../actions'

// Components
import { Link, withRouter } from 'react-router-dom'
import { Divider, Button } from 'semantic-ui-react'
import PageHeader from '../components/PageHeader'

class PostView extends Component {
  constructor(props) {
    super(props)
    this.onDeleteClick = this.onDeleteClick.bind(this)
  }

  onDeleteClick() {
    this.props.deletePost(this.props.viewPostID, this.props.history)
  }

  render() {
    const { post } = this.props
    return (
      <div className="postview-page">
        <PageHeader title={post.title} content={post.subtitle} />
        <Divider />
        <div>{post.content}</div>
        <div className="buttons">
          <Button onClick={this.onDeleteClick}>Delete</Button>
          <Link to="/dashboard">
            <Button>Back</Button>
          </Link>
        </div>
      </div>
    )
  }
}

const mapStateToProps = state => {
  const { posts, viewPostID } = state.blog
  const post = posts.find(post => post._id === viewPostID)
  return { post, viewPostID, state }
}

export default connect(mapStateToProps, { deletePost })(withRouter(PostView))
