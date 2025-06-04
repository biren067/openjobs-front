import { Navigate, useLocation } from "react-router-dom"
import { useAuth } from "../contexts/auth/AuthContext"

export default function RequireRole({ role, children }: { role: string, children: JSX.Element }) {
  const { user } = useAuth()
  const location = useLocation()
  if (!user || user.role !== role) {
    console.log("in RequireRole, user:", user, "role:", role)
    return <Navigate to="/login" state={{ from: location }} replace />
  }
  return children
}