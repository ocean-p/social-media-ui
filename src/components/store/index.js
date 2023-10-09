import { applyMiddleware, combineReducers, legacy_createStore } from "redux";
import { authReducer } from "./auth/reducer";
import { userReducer } from "./user/reducer";
import thunk from "redux-thunk";

const rootReducers = combineReducers({
  auth: authReducer,
  user: userReducer
})

export const store = legacy_createStore(rootReducers, applyMiddleware(thunk))