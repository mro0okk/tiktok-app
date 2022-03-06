import { combineReducers } from 'redux';
import autoMergeLevel2 from "redux-persist/lib/stateReconciler/autoMergeLevel2"
import storage from "redux-persist/lib/storage"
import { persistReducer } from "redux-persist"
import postReducer from './postReducer';
import userReducer from './userReducer';
const userPersistConfig = {
    storage: storage,
    stateReconciler: autoMergeLevel2,
    key: "user",
    whitelist: ["isLoggedIn", "userInfo"],
}
export default combineReducers({
    user: persistReducer(userPersistConfig, userReducer),
    postlists: postReducer
})    
