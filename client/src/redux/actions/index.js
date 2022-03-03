import { createAsyncThunk } from "@reduxjs/toolkit"
import { createPost, fetchPosts, deletePost, findByName } from "../../Api"

export const fetchAsyncPosts = createAsyncThunk(
  "posts/fetchAsyncPosts",
  async () => {
    const res = (await fetchPosts()).data
    return res
  }
)
export const findAsyncPostsByName = createAsyncThunk(
  "post/findAsyncPostbyName",
  async (payload) => {
    console.log(payload.name)
    const res = await (await findByName(payload)).data
    return res
  }
)
export const createAsyncPost = createAsyncThunk(
  "posts/createAsyncPost",
  async (payload) => {
    const res = await createPost(payload)
    return res.data
  }
)
export const deleteAsyncPost = createAsyncThunk(
  "posts/deletePost",
  async (payload) => {
    const res = (await deletePost(payload)).data
    return res
  }
)
