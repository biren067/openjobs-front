// import { createContext, useContext, useState, ReactNode } from "react"

// type UserType = "admin" | "recruiter" | "applicant"

// type AuthContextType = {
//   user: { role: UserType } | null
//   login: (role: UserType) => void
//   logout: () => void
// }

// const AuthContext = createContext<AuthContextType | undefined>(undefined)

// export function AuthProvider({ children }: { children: ReactNode }) {
//   const [user, setUser] = useState<{ role: UserType } | null>(null)

//   const login = (role: UserType) => setUser({ role })
//   const logout = () => setUser(null)

//   return (
//     <AuthContext.Provider value={{ user, login, logout }}>
//       {children}
//     </AuthContext.Provider>
//   )
// }

// export function useAuth() {
//   const context = useContext(AuthContext)
//   if (!context) throw new Error("useAuth must be used within AuthProvider")
//   return context
// }
import React, { createContext, useContext, useState, useEffect, ReactNode } from "react"
import axios from "axios"
import axiosInstance from "../../utils/AxiosInstance"

const API_URL = import.meta.env.VITE_API_URL

type UserType = "admin" | "recruiter" | "applicant"

type AuthContextType = {
  user: { role: UserType } | null
  login: (username: string, password: string) => Promise<void>
  logout: () => void
  loading: boolean
  error: string
}

const AuthContext = createContext<AuthContextType | undefined>(undefined)

export function AuthProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<{ role: UserType } | null>(null)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState("")

  // On mount, check for existing tokens and role
  useEffect(() => {
    const role = localStorage.getItem("role") as UserType | null
    if (role) setUser({ role })
  }, [])

  const login = async (username: string, password: string) => {
    setLoading(true)
    setError("")
    try {
      const res = await axiosInstance.post(`${API_URL}api/token/`, { username, password })
      
      const { access, refresh, role } = res.data
      localStorage.setItem("access_token", access)
      localStorage.setItem("refresh_token", refresh)
      localStorage.setItem("role", role)
      setUser({ role })
    } catch (err: any) {
      setError(err.response?.data?.detail || "Login failed")
      throw err
    } finally {
      setLoading(false)
    }
  }

  const logout = () => {
    localStorage.removeItem("access_token")
    localStorage.removeItem("refresh_token")
    localStorage.removeItem("role")
    setUser(null)
  }

  return (
    <AuthContext.Provider value={{ user, login, logout, loading, error }}>
      {children}
    </AuthContext.Provider>
  )
}

export function useAuth() {
  const context = useContext(AuthContext)
  if (!context) throw new Error("useAuth must be used within AuthProvider")
  return context
}

// Optional: Token refresh utility
export async function refreshToken() {
  const refresh = localStorage.getItem("refresh_token")
  if (!refresh) throw new Error("No refresh token")
  const res = await axios.post(`${API_URL}api/token/refresh/`, { refresh })
  localStorage.setItem("access_token", res.data.access)
  return res.data.access
}

export function setTokens({ access, refresh, role }: { access: string, refresh: string, role: string }) {
  localStorage.setItem("access_token", access)
  localStorage.setItem("refresh_token", refresh)
  localStorage.setItem("role", role)
}

export function clearTokens() {
  localStorage.removeItem("access_token")
  localStorage.removeItem("refresh_token")
  localStorage.removeItem("role")
}