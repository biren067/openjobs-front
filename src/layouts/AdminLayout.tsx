import { Outlet } from "react-router-dom"
function AdminLayout() {
  return (
    <><h1>Admin Sidebar</h1>
      <Outlet/>
    </>
  )
}

export default AdminLayout