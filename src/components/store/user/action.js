import { FOLLOW_USER, GET_USERS_BY_IDS, GET_USER_BY_USERNAME, PROFILE_USER, SEARCH_USER, UNFOLLOW_USER, UPDATE_USER } from "./actionType"

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

export const findUserbyUsername = (data) => async (dispatch) => {
  try {
    const res = await fetch(`/api/users/username/${data.username}`, {
      method: 'GET',
      headers:{
        'Content-Type': 'application/json',
        Authorization: "Bearer " + data.jwt
      }
    })
    const user = await res.json()
    console.log("find by username: ", user)
    dispatch({type: GET_USER_BY_USERNAME, payload: user})
  } catch (error) {
    console.log(error)
  }
}

export const findUsersbyUserIds= (data) => async (dispatch) => {
  try {
    const res = await fetch(`/api/users/${data.userIds}`, {
      method: 'GET',
      headers:{
        'Content-Type': 'application/json',
        Authorization: "Bearer " + data.jwt
      }
    })
    const users = await res.json()
    console.log("find by userids: ", users)
    dispatch({type: GET_USERS_BY_IDS, payload: users})
  } catch (error) {
    console.log(error)
  }
}

export const followUser = (data) => async (dispatch) => {
  try {
    const res = await fetch(`/api/users/follow/${data.userId}`, {
      method: 'PUT',
      headers:{
        'Content-Type': 'application/json',
        Authorization: "Bearer " + data.jwt
      }
    })
    const message = await res.json()
    console.log("follow user: ", message)
    dispatch({type: FOLLOW_USER, payload: message})
  } catch (error) {
    console.log(error)
  }
}

export const unfollowUser = (data) => async (dispatch) => {
  try {
    const res = await fetch(`/api/users/unfollow/${data.userId}`, {
      method: 'PUT',
      headers:{
        'Content-Type': 'application/json',
        Authorization: "Bearer " + data.jwt
      }
    })
    const message = await res.json()
    console.log("unfollow user: ", message)
    dispatch({type: UNFOLLOW_USER, payload: message})
  } catch (error) {
    console.log(error)
  }
}

export const searchUsers= (data) => async (dispatch) => {
  try {
    const res = await fetch(`/api/users/search?q=${data.query}`, {
      method: 'GET',
      headers:{
        'Content-Type': 'application/json',
        Authorization: "Bearer " + data.jwt
      }
    })
    const users = await res.json()
    console.log("search users: ", users)
    dispatch({type: SEARCH_USER, payload: users})
  } catch (error) {
    console.log(error)
  }
}

export const updateUser= (data) => async (dispatch) => {
  try {
    const res = await fetch(`/api/users/update`, {
      method: 'PUT',
      headers:{
        'Content-Type': 'application/json',
        Authorization: "Bearer " + data.jwt
      },
      body: JSON.stringify(data.data)
    })
    const user = await res.json()
    console.log("update user: ", user)
    dispatch({type: UPDATE_USER, payload: user})
  } catch (error) {
    console.log(error)
  }
}
