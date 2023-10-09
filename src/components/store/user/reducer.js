import { PROFILE_USER } from "./actionType"

const initialValue = {
  user: null
}

export const userReducer = (state=initialValue, {type, payload}) => {
  if(type === PROFILE_USER){
    return {...state, user: payload}
  }

  return state
}