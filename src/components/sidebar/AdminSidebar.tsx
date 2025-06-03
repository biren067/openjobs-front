import SidebarMenuItem from '../SidebarMenuItem'
import { Link } from 'react-link'

export default function AdminSidebar() {
  return (
    <nav>
      <SidebarMenuItem label="Dashboard" to="/admin" />
      <SidebarMenuItem label="Users">
        <Link to="/admin/users/list">User List</Link>
        <Link to="/admin/users/create">Create User</Link>
      </SidebarMenuItem>
      {/* more menu items */}
    </nav>
  )
}