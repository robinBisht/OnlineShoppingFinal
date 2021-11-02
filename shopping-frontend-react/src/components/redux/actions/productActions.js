import axios from "axios";
import { ActionTypes } from "../constants/action-types";

export const setProducts = (products) => {
    return {
        type: ActionTypes.SET_PRODUCTS,
        payload: products
    }
}

export const selectedProduct = (product) => {
  return {
    type: ActionTypes.SELECTED_PRODUCT,
    payload: product,
  };
};
export const deleteProduct = (id) => {
  const del = async ()=> axios.delete(`http://localhost:9092/products/${id}/delete`)
  del()
  .catch((err)=> console.log(err))
  return {
    type: ActionTypes.DELETE_PRODUCT,
    payload: id
  };
};

export const addProduct = (product) => {
  return {
    type: ActionTypes.ADD_PRODUCT,
    payload: product
  }
}