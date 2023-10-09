import { PROFILE_USER } from "./actionType"

export const getUserProfile = (jwt) => async (dispatch) => {
  try {
    const res = await fetch('/api/users/profile', {
      method: 'GET',
      headers:{
        'Content-Type': 'application/json',
        Authorization: "Bearer " + jwt
      }
    })
    const profile = await res.json()
    dispatch({type: PROFILE_USER, payload: profile})

  } catch (error) {
    console.log(error)
  }
}