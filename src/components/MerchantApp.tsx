import { useEffect, useRef, useState } from 'react'
import Dashboard from '../pages/Dashboard'
import Debt from '../pages/Debt'
import Fraud from '../pages/Fraud'
import Ledger from '../pages/Ledger'
import Report from '../pages/Report'
import { AppProvider } from '../store'
import BottomNav from './BottomNav'
import SheetHost from './SheetHost'
import { TabNavContext, type Tab } from './tabNav'
import ToastHost from './ToastHost'

const screens: Record<Tab, JSX.Element> = {
  dashboard: <Dashboard />,
  ledger: <Ledger />,
  debt: <Debt />,
  fraud: <Fraud />,
  report: <Report />,
}

// The full merchant app. Tab state is local, so it works identically inside the
// landing-hero phone and as the standalone /app route.
export default function MerchantApp() {
  const [active, setActive] = useState<Tab>('dashboard')
  const scrollRef = useRef<HTMLElement>(null)

  useEffect(() => {
    if (scrollRef.current) scrollRef.current.scrollTop = 0
  }, [active])

  return (
    <TabNavContext.Provider value={{ active, go: setActive }}>
      <AppProvider>
        <div className="app-shell">
          <main className="app-scroll" ref={scrollRef}>
            {screens[active]}
          </main>
          <BottomNav />
          <ToastHost />
          <SheetHost />
        </div>
      </AppProvider>
    </TabNavContext.Provider>
  )
}
