import { createContext, useContext } from 'react'

// Tab-based navigation for the merchant app. Using local state (not the router)
// lets the same app run inside the landing-hero phone AND as the /app route
// without nesting routers.
export type Tab = 'dashboard' | 'ledger' | 'debt' | 'fraud' | 'report'

export interface TabNav {
  active: Tab
  go: (tab: Tab) => void
}

export const TabNavContext = createContext<TabNav>({
  active: 'dashboard',
  go: () => {},
})

export const useTabNav = (): TabNav => useContext(TabNavContext)
