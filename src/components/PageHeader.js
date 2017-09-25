import React from 'react'

import { Header } from 'semantic-ui-react'

const PageHeader = ({ title, content, children }) => (
  <div>
    <Header as="h4" className="header">
      {title}
      {children}
    </Header>
    <Header as="h3">{content}</Header>
  </div>
)

export default PageHeader
