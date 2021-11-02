import axios from "axios";
import { ActionTypes } from "../constants/action-types";

export const setCategories = (categories) => {
    return {
        type: ActionTypes.SET_CATEGORY,
        payload: categories
    }
}

export const deleteCategory = (id) => {
  const del = async ()=> axios.delete(`http://localhost:9092/category/${id}/delete`)
  del()
  .catch((err)=> console.log(err))
  return {
    type: ActionTypes.DELETE_CATEGORY,
    payload: id
  };
};

export const addCategory = (category) => {
  return {
    type: ActionTypes.ADD_CATEGORY,
    payload: category
  }
}