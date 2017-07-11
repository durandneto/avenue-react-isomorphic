import React, { Component } from 'react'
import { Link } from 'react-router'
import PropTypes from 'prop-types'
import { List } from 'immutable'

class Products extends Component {
  render() {
    console.log(this.props.products.toJS())
    return (
      <div>
        Products component
        {
          this.props.products.get('data').map((data)=> {
            let product = data.get('product')
            return (
              <div key={product.get('id')}>
              <Link to={`/products/${product.get('slug')}`}> { product.get('title') }</Link>
              </div>
            )
          })
        }
      </div>
    )
  }
}

Products.propTypes = {
  products: PropTypes.object.isRequired
}

export default Products
