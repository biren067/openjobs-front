import { useState } from "react"
import { useNavigate,Link } from "react-router-dom"
import axios from "axios"
import { toast } from "react-hot-toast"
// import { Toaster } from "react-hot-toast"
// import { toast } from "react-hot-toast"
const API_URL = import.meta.env.VITE_API_URL

export default function UserRegistration() {
  const [role, setRole] = useState<"recruiter" | "applicant" | "">("")
  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("")
  const [confirmPassword, setConfirmPassword] = useState("")
  const [email, setEmail] = useState("")
  const [success, setSuccess] = useState("")
  const [error, setError] = useState("")
  const [showPassword, setShowPassword] = useState(false)
  const [showConfirmPassword, setShowConfirmPassword] = useState(false)
  const navigate = useNavigate()
  

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setError("")
    setSuccess("")
    if (!role) {
      setError("Please select a role.")
      return
    }
    if (password !== confirmPassword) {
      setError("Passwords do not match.")
      return
    }
   try {
    const res = await axios.post(`${API_URL}api/register/`, {
      username,
      password,
      email,
      role,
    })
    
    if (res.status === 201) {
      toast.success("Registration successful!", { duration: 3000 })
      setUsername("")
      setPassword("")
      setConfirmPassword("")
      setEmail("")
      setRole("")
      
      navigate("/login")
    
    }  else {
      toast.error(res.data?.message || "Registration failed")
    }
  } catch (err: any) {
    setError(err.response?.data?.detail || "Registration failed")
  }
  }

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-50 dark:bg-gray-900">
    {/* <Toaster position="top-center" /> */}
      <form
        onSubmit={handleSubmit}
        className="bg-white dark:bg-gray-800 shadow-lg rounded-lg p-8 w-full max-w-md flex flex-col gap-4"
      >
        <h2 className="text-2xl font-bold text-center text-green-700 dark:text-green-300 mb-2">
          User Registration
        </h2>
        {error && <div className="text-red-500 text-center">{error}</div>}
        {success && <div className="text-green-600 text-center">{success}</div>}

        <div className="flex gap-4 justify-center">
          <label className={`cursor-pointer px-4 py-2 rounded border ${role === "recruiter" ? "bg-green-100 border-green-500" : "border-gray-300"}`}>
            <input
              type="radio"
              name="role"
              value="recruiter"
              checked={role === "recruiter"}
              onChange={() => setRole("recruiter")}
              className="mr-2"
            />
            Recruiter
          </label>
          <label className={`cursor-pointer px-4 py-2 rounded border ${role === "applicant" ? "bg-green-100 border-green-500" : "border-gray-300"}`}>
            <input
              type="radio"
              name="role"
              value="applicant"
              checked={role === "applicant"}
              onChange={() => setRole("applicant")}
              className="mr-2"
            />
            Applicant
          </label>
        </div>

        <input
          type="text"
          placeholder="Username"
          className="p-2 rounded border border-green-300 focus:outline-none focus:ring-2 focus:ring-green-400 dark:bg-green-900 dark:text-white"
          value={username}
          onChange={e => setUsername(e.target.value)}
          required
        />
        <input
          type="email"
          placeholder="Email"
          className="p-2 rounded border border-green-300 focus:outline-none focus:ring-2 focus:ring-green-400 dark:bg-green-900 dark:text-white"
          value={email}
          onChange={e => setEmail(e.target.value)}
          required
        />
        <div className="relative">
          <input
            type={showPassword ? "text" : "password"}
            placeholder="Password"
            className="p-2 rounded border border-green-300 focus:outline-none focus:ring-2 focus:ring-green-400 dark:bg-green-900 dark:text-white w-full"
            value={password}
            onChange={e => setPassword(e.target.value)}
            required
          />
          <span
            className="absolute right-3 top-1/2 -translate-y-1/2 cursor-pointer text-gray-500"
            onClick={() => setShowPassword((v) => !v)}
            title={showPassword ? "Hide password" : "Show password"}
          >
            {showPassword ? (
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.875 18.825A10.05 10.05 0 0112 19c-5.523 0-10-4.477-10-10 0-1.657.336-3.234.938-4.675M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3l18 18" />
              </svg>
            ) : (
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-.274.832-.64 1.624-1.09 2.354M15.54 15.54A5.978 5.978 0 0112 17c-3.314 0-6-2.686-6-6 0-.74.13-1.45.366-2.104" />
              </svg>
            )}
          </span>
        </div>
        <div className="relative">
          <input
            type={showConfirmPassword ? "text" : "password"}
            placeholder="Confirm Password"
            className="p-2 rounded border border-green-300 focus:outline-none focus:ring-2 focus:ring-green-400 dark:bg-green-900 dark:text-white w-full"
            value={confirmPassword}
            onChange={e => setConfirmPassword(e.target.value)}
            required
          />
          <span
            className="absolute right-3 top-1/2 -translate-y-1/2 cursor-pointer text-gray-500"
            onClick={() => setShowConfirmPassword((v) => !v)}
            title={showConfirmPassword ? "Hide password" : "Show password"}
          >
            {showConfirmPassword ? (
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.875 18.825A10.05 10.05 0 0112 19c-5.523 0-10-4.477-10-10 0-1.657.336-3.234.938-4.675M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3l18 18" />
              </svg>
            ) : (
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-.274.832-.64 1.624-1.09 2.354M15.54 15.54A5.978 5.978 0 0112 17c-3.314 0-6-2.686-6-6 0-.74.13-1.45.366-2.104" />
              </svg>
            )}
          </span>
        </div>
        <button
          type="submit"
          className="bg-green-600 hover:bg-green-700 text-white font-bold py-2 rounded transition"
        >
          Register
        </button>
        <p className="text-center text-gray-500 mt-4">
          Already have an account? <Link to="/login" className="text-green-600 hover:underline">Login</Link>    
        </p>
      </form>
    </div>
  )
}