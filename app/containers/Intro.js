import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router'
import Helmet from 'react-helmet'

class Home extends Component {
  render() {
    return (
      <div className="home">
        <Helmet
          title="Home"
        />
        <h1>Home</h1> 
        <Link to="/products">Go to products</Link>
      </div>
    )
  }
}

function mapStateToProps() {
  return {}
}

export default connect(mapStateToProps)(Home)
