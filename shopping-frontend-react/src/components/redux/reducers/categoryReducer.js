import { ActionTypes } from "../constants/action-types";
const initialState = {
  categories: [],
};
export const categoryReducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionTypes.SET_CATEGORY:
      return { ...state, categories: action.payload };
    case ActionTypes.DELETE_CATEGORY:
      return {
        ...state,
        products: state.categories.filter((category) => category.catId !== action.payload),
      };
      case ActionTypes.ADD_CATEGORY:
        return {
          ...state,
          categories: [...state.categories,action.payload]
        }
    default:
      return state;
  }
};
