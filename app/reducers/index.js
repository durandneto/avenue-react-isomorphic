import { combineReducers } from 'redux'
import products from './products'
import productDetail from './productDetail'

const rootReducer = combineReducers({
  products,
  productDetail
})

export default rootReducer
