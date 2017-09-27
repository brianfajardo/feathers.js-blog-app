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
    this.onLogoutClick = this.onLogoutClick.bind(this)
  }

  componentDidMount() {
    this.props.fetchPosts()
  }

  onPostClick(id) {
    this.props.viewPostById(id)
    this.props.history.push('/view_post')
  }

  onLogoutClick() {
    this.props.userLogout()
  }

  render() {
    return (
      <div className="dashboard-page">
        <div>
          <PageHeader
            title="Dashboard"
            content="Express yourself! Create a new post by clicking the button on the right."
          >
            <Button floated="right" onClick={this.onLogoutClick}>
              Logout
            </Button>
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
                <Card fluid onClick={() => this.onPostClick(post._id)}>
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
