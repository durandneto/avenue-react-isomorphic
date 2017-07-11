import React, { Component } from 'react'
import { connect } from 'react-redux'
import { loadProductDetail } from '../actions/products'
import Helmet from 'react-helmet'
import { browserHistory } from 'react-router'
import PropTypes from 'prop-types'
import { Link } from 'react-router'

class Product extends Component {
  static fetchData({ store, params, history }) {
    let { slug } = params
    return store.dispatch(loadProductDetail({ slug, history }))
  }
  componentDidMount() {
    let { slug } = this.props.params
    this.props.loadProductDetail({ slug, history: browserHistory })
  }
  render() {
    let { product } = this.props
    return (
      <div>
        <Helmet
          title={'Product ' + product.get('title')}
        />
        <h2>{ product.get('title')}</h2>
        <h3>{ product.get('description')}</h3>
        {
          product.get('images') ?
            product.get('images').map((img) => {
              return <img key={img.get('id')} src={`http://localhost:3030/files/product/${product.get('id')}/${img.get('title')}.png`} />
            })
          : null
        }
        {
          product.get('parent') ? 
          <div>parent: {product.get('parent').get('title')}</div>
          : null
        }
        <Link to="/products">Back to products</Link>
      </div>
    )
  }
}

function mapStateToProps (state) {
  return { product: state.productDetail }
}

Product.propTypes = {
  product: PropTypes.object.isRequired
}

export { Product }
export default connect(mapStateToProps, { loadProductDetail })(Product)
