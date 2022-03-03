import { configureStore } from "@reduxjs/toolkit"
import postSlice from "./reducers/postsSlice"
const store = configureStore({
  reducer: { allPosts: postSlice },
})
export default store
