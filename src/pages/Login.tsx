import { useState } from "react"
import { useNavigate,  Link } from "react-router-dom"
import { useAuth } from "../contexts/auth/AuthContext"

export default function Login() {
  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("")
  const [error, setError] = useState("")
  const [loading, setLoading] = useState(false)
  const navigate = useNavigate()
  const { login } = useAuth()
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    setError("")
    try {
      const data = await login(username, password)
      console.log("Login successful:", data)
      const role = localStorage.getItem("role")
      if (role === "admin") 
        { console.log("Admin has logged in")
            navigate("/admin")
        }
      else if (role === "recruiter") navigate("/recruiter")
      else navigate("/applicant")
    } catch (err: any) {
      setError(err.response?.data?.detail || "Login failed")
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-white from-green-100 to-green-400 dark:from-green-900 dark:to-green-700">
      <form
        onSubmit={handleSubmit}
        className="bg-green-10 dark:bg-green-950 shadow-lg rounded-lg p-8 w-full max-w-sm flex flex-col gap-3"
      >
        <h2 className="text-2xl font-bold text-green-700 dark:text-green-300 mb-4 text-center">Login</h2>
        {error && <div className="text-red-500 text-center">{error}</div>}
        <input
          type="text"
          placeholder="Username"
          className="p-2 rounded border border-green-300 focus:outline-none focus:ring-2 focus:ring-green-400 dark:bg-green-900 dark:text-white"
          value={username}
          onChange={e => setUsername(e.target.value)}
          required
        />
        <input
          type="password"
          placeholder="Password"
          className="p-2 rounded border border-green-300 focus:outline-none focus:ring-2 focus:ring-green-400 dark:bg-green-900 dark:text-white"
          value={password}
          onChange={e => setPassword(e.target.value)}
          required
        />
        <button
          type="submit"
          className="bg-green-600 hover:bg-green-700 text-white font-bold py-2 rounded transition disabled:opacity-50"
          disabled={loading}
        >
          {loading ? "Logging in..." : "Login"}
        </button>
         <p className="text-center text-gray-500 mt-4">
        Don't have an account? <Link to="/register" className="text-green-600 hover:underline">Sign Up</Link>
        </p>
        <p className="text-center text-gray-500 ">
       <Link to="/reset-password" className="text-green-600 hover:underline">Forget Password</Link>
       </p>
      </form>
     
    </div>
  )
}