import { Route, Routes } from 'react-router-dom'
import AppShell from './components/AppShell'
import Landing from './pages/Landing'
import Dashboard from './pages/Dashboard'
import Ledger from './pages/Ledger'
import Debt from './pages/Debt'
import Fraud from './pages/Fraud'
import Report from './pages/Report'

// PayLedger AI — AI business memory for campus and informal commerce.
// Prototype only. PayLedger AI does not process or verify real payments.
export default function App() {
  return (
    <div className="device">
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route element={<AppShell />}>
          <Route path="/app" element={<Dashboard />} />
          <Route path="/ledger" element={<Ledger />} />
          <Route path="/debt" element={<Debt />} />
          <Route path="/fraud" element={<Fraud />} />
          <Route path="/report" element={<Report />} />
        </Route>
      </Routes>
    </div>
  )
}
