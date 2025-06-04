import { BrowserRouter, Routes, Route } from 'react-router-dom'
import AdminLayout from "./layouts/AdminLayout"
import PublicLayout from "./layouts/PublicLayout"
import RecruiterLayout from "./layouts/RecruiterLayout"
import ApplicantLayout from "./layouts/ApplicantLayout"
import Dashboard from "./pages/admin/Dashboard"
import Contacts from "./pages/public/Contacts"
import Login from "./pages/Login"
import UserRegistration from "./pages/UserRegistration"
import ForgetPassword from "./pages/ForgetPassword"
import RequireRole from "./routes/RequireRole"
import { Toaster } from "react-hot-toast"
import Home from "./pages/public/Home"


function App() {
  return (
    <> 
    <Toaster
                position="top-center"
                toastOptions={{
                  style: {
                    background: "#22c55e", // Tailwind green-500
                    color: "#fff",
                    borderRadius: "8px",
                    boxShadow: "0 2px 8px rgba(34,197,94,0.15)",
                    fontWeight: "bold",
                  },
                  success: {
                    iconTheme: {
                      primary: "#22c55e",
                      secondary: "#fff",
                    },
                  },
                  error: {
                    style: {
                      background: "#ef4444", // Tailwind red-500
                    },
                    iconTheme: {
                      primary: "#ef4444",
                      secondary: "#fff",
                    },
                  },
                }}
              />
    
    <BrowserRouter>
      
    <Routes>
      <Route element={<PublicLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/contacts" element={<Contacts />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<UserRegistration/>} /> 
        <Route path="/reset-password" element={<ForgetPassword/>} />
      </Route>
      <Route path="/admin" element={
        <RequireRole role="admin">
          <AdminLayout />
        </RequireRole>
      }>
        <Route index element={<Dashboard />} />
        {/* More admin routes */}
      </Route>
      <Route path="/recruiter" element={
        <RequireRole role="recruiter">
          <RecruiterLayout />
        </RequireRole>
      }>
        {/* Recruiter dashboard and routes */}
      </Route>
      <Route path="/applicant" element={
        <RequireRole role="applicant">
          <ApplicantLayout />
        </RequireRole>
      }>
        {/* Applicant dashboard and routes */}
      </Route>
    </Routes>
    </BrowserRouter>
  </>
  )
}

export default App