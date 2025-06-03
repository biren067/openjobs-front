
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import AdminLayout from "./layouts/AdminLayout";
import PublicLayout from "./layouts/PublicLayout";
import Dashboard from "./pages/admin/Dashboard";
import Contacts from "./pages/public/Contacts";

function HomePage() {
  return <h1 className="text-3xl font-bold underline">Hello Vite + React + Tailwind CSS!</h1>
}

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<PublicLayout />}>
          <Route path="/" element={<HomePage />} />
          <Route path="/contacts" element={<Contacts/>} />
        </Route>
        <Route path="/admin" element={<AdminLayout />}>
          <Route index element={<Dashboard/>} />
          {/* Add more admin routes here */}
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
