import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import Helmet from 'react-helmet'

class App extends Component {
  render() {
    return (
      <div>
        <Helmet
          defaultTitle="José alves Durand Neto"
          titleTemplate="%s - redux/isomorphic"
          meta={[
            {"name": "description", "content": "A test to Avenue doing universal/isomorphic rendering with Redux + React-router + Express"},
          ]}
          htmlAttributes={{"lang": "en"}}
        />
        {this.props.children}
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {}
}

export default connect(mapStateToProps)(App)
