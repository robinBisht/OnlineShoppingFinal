import { ActionTypes } from "../constants/action-types";
const initialState = {
  userVal: {
    isLoggedIn: false,
    isAdmin: false,
    id:"",
    username: "",
    password: "",
  },
};
export const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionTypes.SIGNUP:
      return {
        ...state,
        userVal: {
          isLoggedIn: true,
          isAdmin: action.payload.role === "admin" ? true : false,
          id:action.payload.userId,
          username: action.payload.username,
          password: action.payload.password,
        },
      };
    case ActionTypes.LOGIN:
      return {
        ...state,
        userVal: {
          isLoggedIn: true,
          isAdmin: action.payload.role === "admin" ? true : false,
          id:action.payload.userId,
          username: action.payload.username,
          password: action.payload.password,
        },
      };
    case ActionTypes.LOGOUT:
      return {
        ...state,
        userVal: {
          isLoggedIn: false,
          isAdmin: false,
          id:"",
          username: "",
          password: "",
        },
      };
    default:
      return state;
  }
};
