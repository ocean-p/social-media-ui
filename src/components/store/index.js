import { applyMiddleware, combineReducers, legacy_createStore } from "redux";
import { authReducer } from "./auth/reducer";
import { userReducer } from "./user/reducer";
import { postReducer } from "./post/reducer";
import { commentReducer } from "./comment/reducer";
import thunk from "redux-thunk";

const rootReducers = combineReducers({
  auth: authReducer,
  user: userReducer,
  post: postReducer,
  comment: commentReducer
})

export const store = legacy_createStore(rootReducers, applyMiddleware(thunk))