import { applyMiddleware, legacy_createStore } from "redux";
import recipeReducer from "./reducer";
import { thunk } from "redux-thunk";
export const store = legacy_createStore(recipeReducer, applyMiddleware(thunk));
