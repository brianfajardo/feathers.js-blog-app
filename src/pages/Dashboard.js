import React, { Component } from 'react'

import { Link } from 'react-router-dom'
import { Button, Divider } from 'semantic-ui-react'
import PageHeader from '../components/PageHeader'

class Dashboard extends Component {
  render() {
    return (
      <div className="dashboard-page">
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
    )
  }
}

export default Dashboard
