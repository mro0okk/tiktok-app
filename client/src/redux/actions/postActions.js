import * as postApi from "../../Api/postApi"
import actionTypes from "../constants/actionTypes"

export const fetchPostStart = () => {
    return async (dispatch, getState) => {
        try {
            dispatch({
                type: actionTypes.FETCH_POST_START
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
export const fetchPostSuccess = (posts) => ({
    type: actionTypes.FETCH_POST_SUCCESS,
    posts
})
export const fetchPostFail = () => ({
    type: actionTypes.FETCH_POST_FAILED,
})

export const createPostStart = (data) => {
    return async (dispatch, getState) => {
        try {
            dispatch({
                type: actionTypes.FETCH_POST_START
            })
            const res = await postApi.createPost(data)
            if (res.errCode === 0) {
                dispatch(createPostSuccess(res.message))
            } else {
                dispatch(createPostFailed(res.errCode))
            }
        } catch (e) {
            dispatch(createPostFailed(e))
        }
    }
};
export const createPostFailed = (err) => ({
    type: actionTypes.CREATE_POST_FAILED,
    payload: err
})
export const createPostSuccess = (mess) => ({
    type: actionTypes.CREATE_POST_SUCCESS,
    payload: mess
})




