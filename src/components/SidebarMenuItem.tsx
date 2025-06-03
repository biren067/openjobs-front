import { useState } from 'react'

export default function SidebarMenuItem({ label, icon, children, to }) {
  const [open, setOpen] = useState(false)
  return (
    <div>
      <div onClick={() => setOpen(!open)}>
        {icon} {label}
      </div>
      {children && open && (
        <div className="pl-4">
          {children}
        </div>
      )}
    </div>
  )
}