import axios from "axios";
import { baseURL } from "../utils/constant";
export const login = async (username, password) => {
    const res = await axios.post(`${baseURL}/login`, {
        username,
        password
    })
    return res
};
