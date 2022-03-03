import { createSlice } from "@reduxjs/toolkit"
import {
  fetchAsyncPosts,
  createAsyncPost,
  deleteAsyncPost,
  findAsyncPostsByName,
} from "../actions"

const postSlice = createSlice({
  name: "posts",
  initialState: {
    isLoading: false,
    data: [],
  },
  extraReducers: {
    [fetchAsyncPosts.pending]: (state, action) => {
      state.isLoading = true
    },
    [fetchAsyncPosts.fulfilled]: (state, action) => {
      state.isLoading = false
      state.data = action.payload
    },
    [fetchAsyncPosts.rejected]: (state, action) => {
      state.isLoading = false
    },
    [findAsyncPostsByName.fulfilled]: (state, action) => {
      state.data = action.payload
    },

    [createAsyncPost.pending]: (state, action) => {
      state.isLoading = true
    },
    [createAsyncPost.fulfilled]: (state, action) => {
      state.isLoading = false
      state.data = [...state.data, action.payload]
    },
    [createAsyncPost.rejected]: (state, action) => {
      state.isLoading = false
      state.data = [...state.data]
    },
    [deleteAsyncPost.rejected]: (state, action) => {
      state.isLoading = false
    },
    [deleteAsyncPost.fulfilled]: (state, action) => {
      state.isLoading = false
      let postId = state.data.findIndex((post, id) => {
        return post._id === action.payload.id
      })
      state.data.splice(postId, 1)
    },
  },
})
export const setPostAction = postSlice.actions
export default postSlice.reducer
