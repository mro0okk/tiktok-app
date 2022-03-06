import actionTypes from "../constants/actionTypes";
import { initPostState } from "../constants/initialState";


export default function postReducer(state = initPostState, action) {
    let newState = { ...state }
    switch (action.type) {
        case actionTypes.FETCH_POST_START:
            newState.isLoading = true
            return {
                ...newState
            }
        case actionTypes.FETCH_POST_SUCCESS:

            newState.isLoading = false
            newState.posts = action.posts

            return {
                ...newState
            }
        case actionTypes.FETCH_POST_FAILED:
            console.log(newState)
            newState.isLoading = false
            return {
                ...newState
            }
        case actionTypes.CREATE_POST_SUCCESS:
            newState.isLoading = false
            newState.message = action.payload
            return {
                ...newState
            }
        case actionTypes.CREATE_POST_FAILED:
            newState.isLoading = false
            action.payload
            return {
                ...newState
            }
        default:
            return state
    }


};
