import { CALL_API, CHAIN_API } from '../middleware/api'

export const LOADED_PRODUCTS = Symbol('LOADED_PRODUCTS')

export function loadProducts() {
  return {
    [CALL_API]: {
      method: 'get',
      path: '/product',
      successType: LOADED_PRODUCTS
    }
  }
}

export const LOADED_PRODUCT_DETAIL = Symbol('LOADED_PRODUCT_DETAIL')
export function loadProductDetail ({ slug, history }) {
  return {  
    [CALL_API]: {
        method: 'get',
        path: `/product/${slug}?image=yes&parent=yes`,
        successType: LOADED_PRODUCT_DETAIL,
        afterError: ()=> {
          history.push('/')
        }
      }
    }
}
