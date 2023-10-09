import { SIGN_IN, SIGN_UP } from "./actionType"

const initalValue = {
  signUp: null,
  signIn: null
}

export const authReducer = (state=initalValue, {type, payload}) => {
  if(type === SIGN_IN){
    return {
      ...state,
      signIn: payload
    }
  } else if(type === SIGN_UP){
    return {
      ...state,
      signUp: payload
    }
  } else{
    return state
  }
}