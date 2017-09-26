import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'

export default ComposedComponent => {
  class Authentication extends Component {
    render() {
      return this.props.authenticated ? (
        <ComposedComponent {...this.props} />
      ) : (
        <Redirect to="/" />
      )
    }
  }

  // Not everything below is still container within this
  // ComposedComponent function.

  const mapStateToProps = state => {
    const { authenticated } = state.auth
    return { authenticated }
  }

  return connect(mapStateToProps)(Authentication)
}
