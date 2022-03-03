import axios from "axios"

const URL = "http://localhost:5000"

export const fetchPosts = async () => await axios.get(URL)

export const createPost = async (payload) => await axios.post(URL, payload)

export const findByName = async (payload) =>
  await axios.get(`${URL}/post/?name=${payload.name}`)

export const deletePost = async (payload) =>
  await axios.delete(`${URL}/delete/${payload.id}`, { data: payload })
