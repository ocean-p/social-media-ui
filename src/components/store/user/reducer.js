import { FOLLOW_USER, GET_USERS_BY_IDS, GET_USER_BY_USERNAME, PROFILE_USER, SEARCH_USER, UNFOLLOW_USER, UPDATE_USER } from "./actionType"

const initialValue = {
  user: null,
  findByUsername: null,
  findByUserIds: [],
  followUser: null,
  unfollowUser: null,
  searchUser: null,
  updateUser: null,
}

export const userReducer = (state=initialValue, {type, payload}) => {
  switch(type){
    case PROFILE_USER:
      return {...state, user: payload}
    case GET_USER_BY_USERNAME:
      return {...state, findByUsername: payload}
    case GET_USERS_BY_IDS:
      return {...state, findByUserIds: payload}
    case FOLLOW_USER:
      return {...state, followUser: payload}
    case UNFOLLOW_USER:
      return {...state, unfollowUser: payload}
    case SEARCH_USER:
      return {...state, searchUser: payload}
    case UPDATE_USER:
      return {...state, updateUser: payload}
    default:
      return state
  }
}