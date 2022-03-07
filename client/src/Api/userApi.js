import axios from "axios";
import { baseURL } from "../utils/constant";
export const login = async (data) => {
    const res = (await axios.post(`${baseURL}/login`, data)).data
    return res
};

export const userRegister = async (data) => {
    const res = await axios.post(`${baseURL}/users/create-user`, data)
    return res.data
};
//delete absolute user
export const destroyUser = async (id) => {
    const res = await axios.delete(`${baseURL}/users/delete-user/${id}`, id)
    return res.data
}
//edit or delete user by user status
export const editUser = async (data) => {
    const res = await axios.put(`${baseURL}/users/edit-user/${data.id}`, data)
    return res.data
}
