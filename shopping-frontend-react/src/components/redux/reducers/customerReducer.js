import { ActionTypes } from "../constants/action-types";
const initialState = {
  customerData: {
    firstname:"",
    lastname:"",
    mobileNo:"",
    email:"",
    cart:{
      products:[]
    }
  },
};
export const customerReducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionTypes.SET_CUSTOMER_DETAIL:
      return {
        ...state,
        customerData: {
          id:action.payload.customerId,
          firstname:action.payload.firstName,
          lastname:action.payload.lastName,
          mobileNo:action.payload.mobileNumber,
          email:action.payload.email,
          cart:action.payload.cart
        },
      };
    default:
      return state;
  }
};
