import { CREATE_NEW_POST, DELETE_POST, GET_SINGLE_POST, GET_USER_POST, LIKE_POST, SAVE_POST, UNLIKE_POST, UNSAVE_POST } from "./actionType"

const initialValue = {
  createdPost: null,
  usersPosts: [],
  deletedPost: null,
  likedPost: null,
  unlikedPost: null,
  savedPost: null,
  unsavedPost: null,
  singlePost: null
}

export const postReducer = (state=initialValue, {type, payload}) => {
  switch(type){
    case CREATE_NEW_POST:
      return {...state, createdPost: payload}
    case GET_USER_POST:
      return {...state, usersPosts: payload}
    case DELETE_POST:
      return {...state, deletedPost: payload}
    case LIKE_POST:
      return {...state, likedPost: payload}
    case UNLIKE_POST:
      return {...state, unlikedPost: payload}
    case SAVE_POST:
      return {...state, savedPost: payload}
    case UNSAVE_POST:
      return {...state, unsavedPost: payload}
    case GET_SINGLE_POST:
      return {...state, singlePost: payload}
    default:
      return state
  }
}