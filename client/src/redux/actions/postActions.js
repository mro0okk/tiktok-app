import * as postApi from "../../Api/postApi"
import actionTypes from "../constants/actionTypes"
const actionToDispatch = (type, payload) => ({ type, payload })

export const fetchPostStart = () => {
    return async (dispatch, getState) => {
        try {
            dispatch({
                type: actionTypes.POST_LOADING
            })
            const res = await postApi.getPosts()
            if (res.errCode === 0) {
                dispatch(fetchPostSuccess(res.posts))
            } else {
                dispatch(fetchPostFail())
            }
        } catch (e) {
            dispatch(fetchPostFail())
        }
    }
}
export const fetchPostSuccess = (payload) => ({
    type: actionTypes.FETCH_POST_SUCCESS,
    payload
})
export const fetchPostFail = (message) => ({
    type: actionTypes.FETCH_POST_FAILED,
    payload: message
})

export const createPostStart = (data) => {
    return async (dispatch, getState) => {
        try {
            dispatch({
                type: actionTypes.POST_LOADING
            })
            const res = await postApi.createPost(data)
            if (res.errCode === 0) {
                dispatch(createPostSuccess(res.message))
            } else {
                dispatch(fetchPostFail(res.errMessage))
            }
        } catch (e) {
            dispatch(fetchPostFail(e))
        }
    }
};
export const createPostSuccess = (payload) => ({
    type: actionTypes.CREATE_POST_SUCCESS,
    payload
})

export const updatePostStart = (data) => {
    return async (dispatch, getState) => {
        try {
            dispatch({
                type: actionTypes.POST_LOADING
            })
            const res = await postApi.updatePost(data)
            if (res.errCode === 0) {
                dispatch(updatePostSuccess(res.message))
            } else {
                dispatch(fetchPostFail(res.errMessage))
            }
        } catch (e) {
            dispatch(fetchPostFail(e))
        }
    }
};
export const updatePostSuccess = (data) => ({
    type: actionTypes.UPDATE_POST_SUCCESS,
    payload: data
})
export const deltePostStart = (data) => {
    return async (dispatch, getState) => {
        try {
            dispatch({
                type: actionTypes.POST_LOADING
            })
            const res = await postApi.deletePost(data)
            if (res.errCode === 0) {
                dispatch(deletePostSuccess(res.message))
            } else {
                dispatch(fetchPostFail(res.errMessage))
            }
        } catch (error) {
            dispatch(fetchPostFail(error))

        }
    }
};
export const deletePostSuccess = (payload) => ({
    type: actionTypes.DELETE_POST_SUCCESS,
    payload
})
