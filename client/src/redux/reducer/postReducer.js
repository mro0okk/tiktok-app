import actionTypes from "../constants/actionTypes";
import { initPostState } from "../constants/initialState";


export default function postReducer(state = initPostState, action) {
    const newState = { ...state }
    switch (action.type) {
        case actionTypes.POST_LOADING:
            newState.isLoading = true
            return newState
        case actionTypes.FETCH_POST_SUCCESS:
            newState.isLoading = false
            newState.posts = action.payload
            return newState
        case actionTypes.FETCH_POST_FAILED:
            console.log(newState)
            newState.isLoading = false
            return newState
        case actionTypes.CREATE_POST_SUCCESS:
            newState.isLoading = false
            newState.message = action.payload
            return newState
        case actionTypes.UPDATE_POST_SUCCESS:
            newState.isLoading = false
            newState.message = action.payload
            return newState
        case actionTypes.DELETE_POST_SUCCESS:
            newState.isLoading = false
            newState.message = action.payload
            return newState
        default:
            return state
    }


};
