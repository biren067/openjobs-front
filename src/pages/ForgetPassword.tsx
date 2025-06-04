import { useState } from "react"

export default function ForgetPassword() {
  const [email, setEmail] = useState("")
  const [success, setSuccess] = useState("")
  const [error, setError] = useState("")
  const [loading, setLoading] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setError("")
    setSuccess("")
    setLoading(true)
    try {
      const res = await fetch(`${import.meta.env.VITE_API_URL}api/forgot-password/`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      })
      if (!res.ok) throw new Error("Failed to send reset link")
      setSuccess("If this email is registered, a password reset link has been sent.")
      setEmail("")
    } catch (err: any) {
      setError(err.message || "Failed to send reset link")
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-50 dark:bg-gray-900">
      <form
        onSubmit={handleSubmit}
        className="bg-white dark:bg-gray-800 shadow-lg rounded-lg p-8 w-full max-w-md flex flex-col gap-4"
      >
        <h2 className="text-2xl font-bold text-center text-green-700 dark:text-green-300 mb-2">
          Forgot Password
        </h2>
        {error && <div className="text-red-500 text-center">{error}</div>}
        {success && <div className="text-green-600 text-center">{success}</div>}
        <input
          type="email"
          placeholder="Enter your email"
          className="p-2 rounded border border-green-300 focus:outline-none focus:ring-2 focus:ring-green-400 dark:bg-green-900 dark:text-white"
          value={email}
          onChange={e => setEmail(e.target.value)}
          required
        />
        <button
          type="submit"
          className="bg-green-600 hover:bg-green-700 text-white font-bold py-2 rounded transition"
          disabled={loading}
        >
          {loading ? "Sending..." : "Send Reset Link"}
        </button>
        <p className="text-center text-gray-500 mt-4">
          Remembered your password? <a href="/login" className="text-green-600 hover:underline">Login</a> 
        </p>
      </form>
    </div>
  )
}