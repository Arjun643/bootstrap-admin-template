import axios from "axios";

const axiosInstance = axios.create({
  baseURL: process.env.REACT_APP_API_BASE_URL,

  headers: { "Content-Type": "application/json" },
});

// Request interceptor to add the auth token header to requests

axiosInstance.interceptors.request.use(
  config => {
    return config;
  },

  error => {
    Promise.reject(error);
  }
);

// Response interceptor to refresh token on receiving token expired error

axiosInstance.interceptors.response.use(
  response => {
    return response;
  },

  error => {
    return Promise.reject(error);
  }
);

export default axiosInstance;
