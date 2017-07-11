import * as ActionType from '../actions/products'
import Immutable from 'immutable'

let defaultState = Immutable.fromJS({
	data: {}
})
function productsReducer (state = defaultState, action) {
  switch(action.type) {
    case ActionType.LOADED_PRODUCTS:
      return Immutable.fromJS(action.response)
      break
    default:
      return state
  }
}

export default productsReducer
