import axios from "axios"
import { refreshToken, clearTokens } from "../contexts/auth/AuthContext"

const API_URL = import.meta.env.API_URL

const axiosInstance = axios.create({
  baseURL: API_URL,
})

axiosInstance.interceptors.request.use(config => {
  const token = localStorage.getItem("access_token")
  if (token) {
    config.headers.Authorization = `Bearer ${token}`
  }
  return config
})

axiosInstance.interceptors.response.use(
  response => response,
  async error => {
    const originalRequest = error.config
    if (error.response?.status === 401 && !originalRequest._retry) {
      originalRequest._retry = true
      try {
        const newAccess = await refreshToken()
        axios.defaults.headers.common["Authorization"] = `Bearer ${newAccess}`
        originalRequest.headers["Authorization"] = `Bearer ${newAccess}`
        return axiosInstance(originalRequest)
      } catch (err) {
        clearTokens()
        window.location.href = "/login"
        return Promise.reject(err)
      }
    }
    return Promise.reject(error)
  }
)

export default axiosInstance