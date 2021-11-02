import { ActionTypes } from "../constants/action-types";

export const signupUser = (userData) => {
    return {
        type: ActionTypes.SIGNUP,
        payload:userData
    }
}

export const loginUser = (userData) => {
  return {
    type: ActionTypes.LOGIN,
    payload: userData
  };
};

export const logoutUser = () => {
  return {
    type: ActionTypes.LOGOUT
  };
};