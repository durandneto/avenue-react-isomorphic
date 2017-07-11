import * as ActionType from '../actions/products'
import _ from 'lodash'
import Immutable from 'immutable'

let defaultState = Immutable.fromJS({
	title: ''
	, description: ''
	, images: []
	, parent: {}
})

export default function(state = defaultState, action) {
  switch(action.type) {
    case ActionType.LOADED_PRODUCT_DETAIL:
      return Immutable.fromJS(action.response.data[0].product)
      break
    default:
      return state
  }
}
