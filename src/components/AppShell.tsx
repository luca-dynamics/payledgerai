import { Outlet } from 'react-router-dom'
import BottomNav from './BottomNav'

// Phone-frame shell shared by all in-app screens.
export default function AppShell() {
  return (
    <div className="app-shell">
      <main className="app-scroll">
        <Outlet />
      </main>
      <BottomNav />
    </div>
  )
}
