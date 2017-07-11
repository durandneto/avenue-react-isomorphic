import React from 'react'
import { Provider } from 'react-redux'
import { Router, Route, IndexRoute } from 'react-router'
import configureStore from 'store/configureStore'

import App from 'containers/App'
import Intro from 'containers/Intro'
import Products from 'containers/Products'
import Product from 'containers/Product'

export default function(history) {
  return (
    <Router history={history}>
      <Route path="/" component={App}>
        <Route path="products" component={Products} />
        <Route path="products/:slug" component={Product} />
        <IndexRoute component={Intro} />
      </Route>
    </Router>
  )
}
