import axios from "axios"
import { baseURL } from "../utils/constant"

export const getPosts = async () => {
  const res = await (await axios.get(baseURL)).data
  return res
}
export const createPost = async (data) => {
  const res = await axios.post(`${baseURL}/posts/create-post`, data)
  return res.data
};
export const deletePost = async (postId) => {
  const res = await axios.delete(`${baseURL}/posts/delete-post/${postId}`)
  return res.data
};
export const editPost = async (data) => {
  const res = await axios.put(`${baseURL}/posts/edit-post`, data)
  return res.data
}