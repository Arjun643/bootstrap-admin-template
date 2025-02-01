import { setLocalStorageData } from "../localStorage";
import { LoginData } from "utility";
import axiosInstance from "./axiosInstance";

const LOGIN_API_URL = process.env.REACT_APP_API_LOGIN_URL;


export const userListApi = async (page: number, limit: number) => {
  try {
    const API_URL = `arjun-exiliensoft/arjun_data/data?_page=${page}&_limit=${limit}`;
    const response = await axiosInstance.get(API_URL);
    const { data, headers } = response;
    const totalRows = parseInt(headers["x-total-count"]) || 0;
    return { users: data, totalRows };
  } catch (error) {
    throw error;
  }
};
export const getUserDetailsApi = async (id: number) => {
  try {
    const API_URL = `arjun-exiliensoft/arjun_data/data?id=${id}`;
    const response = await axiosInstance.get(API_URL);
    return response.data;
  } catch (error) {
    throw error;
  }
};
export const loginApi = async (data: LoginData) => {
  try {
    const API_URL = `${LOGIN_API_URL}/auth/login`;
    const response = await axiosInstance.post(API_URL, data);
    if (response.status === 200) {
      setLocalStorageData("isLoggedIn", "true");
    }
    return response.data;
  } catch (error) {
    throw error;
  }
};
