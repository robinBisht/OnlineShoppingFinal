import { ActionTypes } from "../constants/action-types";
const initialState = {
    address:{}

};
export const addressReducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionTypes.ADD_ADDRESS:
      return { ...state, address:action.payload };
    default:
      return state;
  }
};
