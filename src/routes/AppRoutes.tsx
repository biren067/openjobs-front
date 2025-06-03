import { Routes, Route } from 'react-router-dom'
import AdminLayout from '../layouts/AdminLayout'
import PublicLayout from '../layouts/PublicLayout'
import AdminDashboard from '../pages/admin/Dashboard'
import PublicHome from '../pages/public/Home'
// ...other imports

export default function AppRoutes() {
  return (
    <Routes>
      <Route element={<PublicLayout />}>
        <Route path="/" element={<PublicHome />} />
        {/* other public routes */}
      </Route>
      <Route path="/admin" element={<AdminLayout />}>
        <Route index element={<AdminDashboard />} />
        {/* other admin routes */}
      </Route>
    </Routes>
  )
}