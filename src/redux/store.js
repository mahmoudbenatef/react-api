import { createStore, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import { reducer } from "./reducers";

const enhancer = window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__();
const composedEnhancers = compose(applyMiddleware(thunk), enhancer)
export const store = createStore(reducer, {}, composedEnhancers)