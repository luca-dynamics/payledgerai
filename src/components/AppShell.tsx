import { useEffect } from 'react'
import { Outlet } from 'react-router-dom'
import BottomNav from './BottomNav'

// Logical device size (iPhone-class). Content always renders at this width so
// it never compresses; the whole frame is scaled to fit the viewport.
const DEVICE_H = 945
const V_MARGIN = 32

export default function AppShell() {
  useEffect(() => {
    const root = document.documentElement
    const update = () => {
      const scale = Math.min(1, (window.innerHeight - V_MARGIN) / DEVICE_H)
      root.style.setProperty('--dev-scale', String(scale))
    }
    update()
    window.addEventListener('resize', update)
    return () => window.removeEventListener('resize', update)
  }, [])

  // On phones the app fills the screen; on larger screens it is presented
  // inside a realistic phone device mockup on a fixed canvas (Figma-style):
  // the page itself does not scroll — only the phone's screen scrolls.
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
