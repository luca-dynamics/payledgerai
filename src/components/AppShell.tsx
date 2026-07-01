import { Outlet } from 'react-router-dom'
import BottomNav from './BottomNav'

// The in-app experience. On phones it fills the screen; on larger screens it is
// presented inside a realistic device mockup on a fixed canvas (Figma-style):
// the page itself does not scroll — only the phone's screen scrolls.
export default function AppShell() {
  return (
    <div className="device-stage">
      <div className="device-frame">
        <span className="device-notch" aria-hidden="true" />
        <div className="app-shell">
          <main className="app-scroll">
            <Outlet />
          </main>
          <BottomNav />
        </div>
      </div>
    </div>
  )
}
