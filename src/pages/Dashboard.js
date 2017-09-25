import React, { Component } from 'react'
import { connect } from 'react-redux'

// Components
import { Link, withRouter } from 'react-router-dom'
import { Button, Divider, Card, Icon } from 'semantic-ui-react'
import PageHeader from '../components/PageHeader'

import * as actions from '../actions/index'

class Dashboard extends Component {
  constructor(props) {
    super(props)
    this.onPostClick = this.onPostClick.bind(this)
  }

  componentDidMount() {
    this.props.fetchPosts()
  }

  onPostClick(id) {
    this.props.viewPostById(id)
    this.props.history.push('/view_post')
  }

  render() {
    console.log('Dashboard posts:', this.props.posts)

    return (
      <div className="dashboard-page">
        <div>
          <PageHeader
            title="Dashboard"
            content="Create a new blog post by clicking the button on the right! Or click on a post to view."
          >
            <Link to="/">
              <Button floated="right">Logout</Button>
            </Link>
            <Link to="/create_post">
              <Button floated="right">Create</Button>
            </Link>
          </PageHeader>
          <Divider />
        </div>
        <div>
          {this.props.posts.length !== 0 &&
            this.props.posts.map((post, index) => (
              <div key={index} className="cards">
                <Card fluid onClick={() => this.onPostClick(post.id)}>
                  <Card.Content header={post.title} />
                  <Card.Content description={post.subtitle} />
                  <Card.Content extra className="time">
                    <Icon name="time" />
                    {post.createdAt}
                  </Card.Content>
                </Card>
              </div>
            ))}
        </div>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return { posts: state.blog.posts }
}

export default connect(mapStateToProps, actions)(withRouter(Dashboard))
