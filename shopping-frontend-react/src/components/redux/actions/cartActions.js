import { ActionTypes } from "../constants/action-types";

export const showCart = (cart) => {
  let data = cart.products
    return {
        type: ActionTypes.SHOW_CART,
        payload: data
    }
}


export const addCart = (cart) => {
  let data = cart.products[cart.products.length-1]
  return {
    type: ActionTypes.ADD_TO_CART,
    payload: data
  }
}
export const setCart = (cart) => {
  let data = cart.products
    return {
      type: ActionTypes.SET_CART,
      payload: data
    }
  }