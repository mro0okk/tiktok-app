import actionTypes from "../constants/actionTypes";
import { initUserState } from "../constants/initialState"

export default function userReducer(state = initUserState, action) {
    const newState = { ...state }
    switch (action.type) {
        case actionTypes.USER_LOADING:
            newState.isLoading = true
        case actionTypes.USER_LOGIN_SUCCESS:
            newState.isLoading = false

            newState.isLoggedIn = true
            newState.userInfo = action.payload
            return newState
        case actionTypes.USER_LOGIN_FAIL:
            newState.isLoading = false

            newState.isLoggedIn = false
            newState.userInfo = null
            return newState
        case actionTypes.REGISTER_SUCCESS:
            newState.isLoading = false

            newState.message = action.payload
            return newState
        case actionTypes.REGISTER_FAILED:
            newState.isLoading = false

            newState.message = action.payload
            return newState

        case actionTypes.USER_UPDATE_SUCCESS:
            newState.message = action.payload
            return newState

        case actionTypes.USER_UPDATE_SUCCESS:
            newState.message = action.payload
            return newState

        case actionTypes.PROCESS_LOGOUT:
            newState.userInfo = null
            newState.isLoggedIn = false
            return newState
        default:
            return state
    }
};
