import { combineReducers } from "redux";
import { productReducer } from "./productReducer";
import { selectedProductReducer } from "./selectedProduct";

export const reducer = combineReducers({
    allProducts: productReducer,
    selectedProduct: selectedProductReducer
})