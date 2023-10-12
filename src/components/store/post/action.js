import { CREATE_NEW_POST, DELETE_POST, GET_SINGLE_POST, GET_USER_POST, LIKE_POST, REQ_USER_POST, SAVE_POST, UNLIKE_POST, UNSAVE_POST } from "./actionType"

export const createPost = (data) => async (dispatch) => {
  try {
    const res = await fetch('/api/posts/create', {
      method: 'POST',
      headers:{
        'Content-Type': 'application/json',
        Authorization: "Bearer " + data.jwt
      },
      body: JSON.stringify(data.data)
    })
    const post = await res.json()
    console.log('create post: ', post)
    dispatch({type: CREATE_NEW_POST, payload: post})
  } catch (error) {
    console.log(error)
  }
}

export const findUserPosts = (data) => async (dispatch) => {
  try {
    const res = await fetch(`/api/posts/users/${data.userIds}`, {
      method: 'GET',
      headers:{
        'Content-Type': 'application/json',
        Authorization: "Bearer " + data.jwt
      }
    })
    const posts = await res.json()
    console.log('find posts by userIds : ', posts)
    dispatch({type: GET_USER_POST, payload: posts})
  } catch (error) {
    console.log(error)
  }
}

export const reqUserPosts = (data) => async (dispatch) => {
  try {
    const res = await fetch(`/api/posts/user/${data.userId}`, {
      method: 'GET',
      headers:{
        'Content-Type': 'application/json',
        Authorization: "Bearer " + data.jwt
      }
    })
    const posts = await res.json()
    console.log('find posts by userId : ', posts)
    dispatch({type: REQ_USER_POST, payload: posts})
  } catch (error) {
    console.log(error)
  }
}

export const likePost = (data) => async (dispatch) => {
  try {
    const res = await fetch(`/api/posts/like/${data.postId}`, {
      method: 'PUT',
      headers:{
        'Content-Type': 'application/json',
        Authorization: "Bearer " + data.jwt
      }
    })
    const post = await res.json()
    console.log('like post : ', post)
    dispatch({type: LIKE_POST, payload: post})
  } catch (error) {
    console.log(error)
  }
}

export const unlikePost = (data) => async (dispatch) => {
  try {
    const res = await fetch(`/api/posts/unlike/${data.postId}`, {
      method: 'PUT',
      headers:{
        'Content-Type': 'application/json',
        Authorization: "Bearer " + data.jwt
      }
    })
    const post = await res.json()
    console.log('unlike post : ', post)
    dispatch({type: UNLIKE_POST, payload: post})
  } catch (error) {
    console.log(error)
  }
}

export const savePost = (data) => async (dispatch) => {
  try {
    const res = await fetch(`/api/posts/save/${data.postId}`, {
      method: 'PUT',
      headers:{
        'Content-Type': 'application/json',
        Authorization: "Bearer " + data.jwt
      }
    })
    const message = await res.json()
    console.log('save post : ', message)
    dispatch({type: SAVE_POST, payload: message})
  } catch (error) {
    console.log(error)
  }
}

export const unsavePost = (data) => async (dispatch) => {
  try {
    const res = await fetch(`/api/posts/unsave/${data.postId}`, {
      method: 'PUT',
      headers:{
        'Content-Type': 'application/json',
        Authorization: "Bearer " + data.jwt
      }
    })
    const message = await res.json()
    console.log('unsave post : ', message)
    dispatch({type: UNSAVE_POST, payload: message})
  } catch (error) {
    console.log(error)
  }
}

export const findPostById = (data) => async (dispatch) => {
  try {
    const res = await fetch(`/api/posts/${data.postId}`, {
      method: 'GET',
      headers:{
        'Content-Type': 'application/json',
        Authorization: "Bearer " + data.jwt
      }
    })
    const post = await res.json()
    console.log('find post by id : ', post)
    dispatch({type: GET_SINGLE_POST, payload: post})
  } catch (error) {
    console.log(error)
  }
}

export const deletePost = (data) => async (dispatch) => {
  try {
    const res = await fetch(`/api/posts/${data.postId}`, {
      method: 'DELETE',
      headers:{
        'Content-Type': 'application/json',
        Authorization: "Bearer " + data.jwt
      }
    })
    const message = await res.json()
    console.log('delete post : ', message)
    dispatch({type: DELETE_POST, payload: message})
  } catch (error) {
    console.log(error)
  }
}