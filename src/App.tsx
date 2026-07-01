import { Route, Routes } from 'react-router-dom'
import MerchantApp from './components/MerchantApp'
import Landing from './pages/Landing'

// PayLedger AI — AI business memory for campus and informal commerce.
// Prototype only. PayLedger AI does not process or verify real payments.
//
// The router only splits landing ("/") from the standalone full-screen app
// ("/app"). Inside the app, screens are switched with local tab state (see
// MerchantApp), so the same app also runs live inside the landing-hero phone.
export default function App() {
  return (
    <div className="device">
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/app" element={<MerchantApp />} />
        <Route path="*" element={<Landing />} />
      </Routes>
    </div>
  )
}
