import { CREATE_COMMENT, GET_POST_COMMENTS, LIKE_COMMENT, UNLIKE_COMMENT } from "./actionType"

const initialValue = {
  createdComment: null,
  postComments: null,
  likedComment: null,
  unlikedComment: null,
}

export const commentReducer = (state=initialValue, {type, payload}) => {
  switch(type){
    case CREATE_COMMENT:
      return {...state, createdComment: payload}
    case GET_POST_COMMENTS:
      return {...state, postComments: payload}
    case LIKE_COMMENT:
      return {...state, likedComment: payload}
    case UNLIKE_COMMENT:
      return {...state, unlikedComment: payload}
    default:
      return state
  }
}