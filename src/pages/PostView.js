import React, { Component } from 'react'
import { connect } from 'react-redux'

// Components
import { Link, withRouter } from 'react-router-dom'
import { Divider, Button } from 'semantic-ui-react'
import PageHeader from '../components/PageHeader'

class PostView extends Component {
  render() {
    const { post, history } = this.props
    return (
      <div>
        {post ? (
          <div className="postview-page">
            <PageHeader title={post.title} content={post.subtitle} />
            <Divider />
            <div>{post.content}</div>
            <div className="buttons">
              <Link to="/dashboard">
                <Button>Back</Button>
              </Link>
            </div>
          </div>
        ) : (
          history.push('/dashboard')
        )}
      </div>
    )
  }
}

const mapStateToProps = state => {
  const { posts, viewPostID } = state.blog
  const post = posts.find(post => post.id === viewPostID)
  return { post }
}

export default connect(mapStateToProps, null)(withRouter(PostView))
