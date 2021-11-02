import { ActionTypes } from "../constants/action-types";
const initialState = {
  products: [],
};
export const productsReducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionTypes.SET_PRODUCTS:
      return { ...state, products: action.payload };
    case ActionTypes.DELETE_PRODUCT:
      return {
        ...state,
        products: state.products.filter((product) => product.productId !== action.payload),
      };
      case ActionTypes.ADD_PRODUCT:
        return {
          ...state,
          products: [...state.products,action.payload]
        }
    default:
      return state;
  }
};

export const selectedProductsReducer = (state = {}, { type, payload }) => {
  switch (type) {
    case ActionTypes.SELECTED_PRODUCT:
      return { ...state, ...payload };
    default:
      return state;
  }
};
