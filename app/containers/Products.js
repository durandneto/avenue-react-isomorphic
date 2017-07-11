import React, { Component } from 'react'
import { connect } from 'react-redux'
import { loadProducts } from '../actions/products'
import { Link } from 'react-router'
import _ from 'lodash'
import Products from '../components/Products'
import Helmet from 'react-helmet'
import PropTypes from 'prop-types'

class ProductContainer extends Component {
  static fetchData({ store }) {
    return store.dispatch(loadProducts())
  }

  componentDidMount() {
    this.props.loadProducts()
  }
  render() {
    return (
      <div>
        <Helmet
          title="Products"
        />
        <h2>Product </h2>
        <Products products={this.props.products} />
        <Link to="/">Back to Home</Link>
      </div>
    )
  }
}

function mapStateToProps (state) {
  return { products: state.products }
}

export { ProductContainer }
export default connect(mapStateToProps, { loadProducts })(ProductContainer)
