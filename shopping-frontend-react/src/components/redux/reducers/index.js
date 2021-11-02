
import { combineReducers } from "redux";
import {productsReducer, selectedProductsReducer } from "./productReducer";
import { userReducer } from "./userReducer";
import { customerReducer } from "./customerReducer";
import { categoryReducer } from "./categoryReducer";
import { addressReducer } from "./addressReducer";
import { cartReducer } from "./cartReducer";

const reducers = combineReducers({
  allProducts: productsReducer,
  product: selectedProductsReducer,
  user: userReducer,
  customer: customerReducer,
  category: categoryReducer,
  address: addressReducer,
  cart: cartReducer
});
export default reducers;