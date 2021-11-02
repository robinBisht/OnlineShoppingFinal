import { ActionTypes } from "../constants/action-types"

export const addAddress = (address) => {
    return {
      type: ActionTypes.ADD_ADDRESS,
      payload: address
    }
  }