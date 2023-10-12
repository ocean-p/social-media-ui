import { CREATE_COMMENT, GET_POST_COMMENTS, LIKE_COMMENT, UNLIKE_COMMENT } from "./actionType"

export const createComment = (data) => async (dispatch) => {
  try {
    const res = await fetch(`/api/comments/create/${data.postId}`, {
      method: 'POST',
      headers:{
        'Content-Type': 'application/json',
        Authorization: "Bearer " + data.jwt
      },
      body: JSON.stringify(data.data)
    })
    const comment = await res.json()
    console.log('create comment: ', comment)
    dispatch({type: CREATE_COMMENT, payload: comment})
  } catch (error) {
    console.log(error)
  }
}

export const findPostComments = (data) => async (dispatch) => {
  try {
    const res = await fetch(`/api/comments/${data.postId}`, {
      method: 'GET',
      headers:{
        'Content-Type': 'application/json',
        Authorization: "Bearer " + data.jwt
      }
    })
    const comments = await res.json()
    console.log('find post comments: ', comments)
    dispatch({type: GET_POST_COMMENTS, payload: comments})
  } catch (error) {
    console.log(error)
  }
}

export const likeComment = (data) => async (dispatch) => {
  try {
    const res = await fetch(`/api/comments/like/${data.commentId}`, {
      method: 'PUT',
      headers:{
        'Content-Type': 'application/json',
        Authorization: "Bearer " + data.jwt
      }
    })
    const comment = await res.json()
    console.log('like comment : ', comment)
    dispatch({type: LIKE_COMMENT, payload: comment})
  } catch (error) {
    console.log(error)
  }
}

export const unlikeComment = (data) => async (dispatch) => {
  try {
    const res = await fetch(`/api/comments/unlike/${data.commentId}`, {
      method: 'PUT',
      headers:{
        'Content-Type': 'application/json',
        Authorization: "Bearer " + data.jwt
      }
    })
    const comment = await res.json()
    console.log('unlike comment : ', comment)
    dispatch({type: UNLIKE_COMMENT, payload: comment})
  } catch (error) {
    console.log(error)
  }
}