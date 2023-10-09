import { PROFILE_USER } from "../user/actionType"
import { SIGN_IN, SIGN_UP } from "./actionType"

export const signInAction = (data) => async (dispatch) => {
  try {
    const res = await fetch('/api/signin', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: 'Basic ' + btoa(data.username + ':' + data.password)
      }
    })
    const token = res.headers.get('Authorization')
    console.log('token: ', token)
    localStorage.setItem('token', token)
    const userData = await res.json()
    dispatch({type: PROFILE_USER, payload:userData})
    dispatch({type: SIGN_IN, payload: token})
  } catch (error) {
    console.log(error)
  }
}

export const signUpAction = (data) => async (dispatch) => {
  try {
    const res = await fetch('/api/signup', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data)
    })
    const user = await res.json()
    console.log('user: ', user)
    dispatch({type: SIGN_UP, payload: user})
  } catch (error) {
    console.log(error)
  }
}