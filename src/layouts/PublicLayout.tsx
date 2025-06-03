import { Outlet } from "react-router-dom"

function PublicLayout() {
  return (
    <>
    <h1>public sidebar</h1>
    <Outlet/>
    </>
  )
}

export default PublicLayout