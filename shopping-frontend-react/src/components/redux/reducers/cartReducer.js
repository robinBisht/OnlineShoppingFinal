
import { ActionTypes } from "../constants/action-types";
const initialState = {
  products:[]
};
export const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionTypes.SHOW_CART:
      return { ...state, products: action.payload };
    case ActionTypes.ADD_TO_CART:
        return {
            ...state,
            products: [...state.products,action.payload]
        }
    case ActionTypes.SET_CART:
        return {
            ...state,
            products: action.payload
        }
    default:
      return state;
  }
};
