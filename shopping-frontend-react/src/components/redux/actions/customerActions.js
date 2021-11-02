import { ActionTypes } from "../constants/action-types";

export const setCustomer = (customerData) => {
    return {
        type: ActionTypes.SET_CUSTOMER_DETAIL,
        payload:customerData
    }
}