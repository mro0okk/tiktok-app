import actionTypes from "../constants/actionTypes";
import * as userApi from "../../Api/userApi"

export const userLogin = (data) => {
    return async (dispatch, getState) => {
        try {
            const res = await userApi.login(data)
            if (res.errCode === 0) {
                dispatch(userLoginSuccess(res.userInfo))
            } else {
                dispatch(userLoginFailed())
            }
        } catch (error) {
            dispatch(userLoginFailed())

        }
    }
}
export const userLoginSuccess = (userInfo) => {
    return {
        type: actionTypes.USER_LOGIN_SUCCESS,
        payload: userInfo
    }
}
export const userLoginFailed = (errMessage) => {
    return {
        type: actionTypes.USER_LOGIN_FAIL,
        payload: errMessage
    }
}
export const userLogout = () => {
    return {
        type: actionTypes.PROCESS_LOGOUT,
    }
};

export const userRegister = (data) => {
    return async (dispatch, getState) => {
        try {
            const res = await userApi.userRegister(data)
            if (res.errCode === 0) {
                dispatch(userRegisterSuccess(res.message))
                dispatch(userLogin(data))
            } else {
                dispatch(userLoginFailed(res.message))
            }
        } catch (e) {

        }
    }
}
export const userRegisterSuccess = (message) => ({
    type: actionTypes.REGISTER_SUCCESS,
    payload: message
})

export const userUpdate = (data) => {
    return async (dispatch, getState) => {
        try {
            dispatch(actionTypes.USER_LOADING)
            const res = await userApi.editUser(data)
            if (res.errCode === 0) {
                dispatch(userUpdateSuccess(res.userInfo))
            } else {
                dispatch(userLoginFailed(res.errMessage))
            }
        } catch (error) {
            dispatch(userLoginFailed(error))

        }
    }
}
export const userUpdateSuccess = (data) => ({
    type: actionTypes.USER_UPDATE_SUCCESS,
    payload: data
})
export const userDelete = (data) => {
    return async (dispatch, getState) => {
        try {
            const res = await userApi.editUser(data)
            if (res.errCode === 0) {
                dispatch(userLoginSuccess(res.userInfo))
            } else {
                dispatch(userLoginFailed(res.errMessage))
            }
        } catch (error) {
            dispatch(userLoginFailed(error))

        }
    }
};
