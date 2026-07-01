import { useApp } from '../store'
import { formatNaira } from '../utils/format'
import Sheet from './Sheet'

const DEMO_AMOUNT = 2500

export default function ScanQRSheet() {
  const { addSale, toast, closeSheet } = useApp()

  const simulate = () => {
    addSale({ customer: 'QR customer', item: 'QR payment', amount: DEMO_AMOUNT, method: 'QR' })
    toast('QR payment received · ' + formatNaira(DEMO_AMOUNT))
    closeSheet()
  }

  return (
    <Sheet title="Scan QR to receive">
      <div className="qr-demo">
        <div className="qr-frame">
          <span className="qr-scan-line" aria-hidden="true" />
          <svg width="120" height="120" viewBox="0 0 120 120" aria-hidden="true">
            <g fill="currentColor">
              <rect x="10" y="10" width="30" height="30" rx="4" fill="none" stroke="currentColor" strokeWidth="7" />
              <rect x="80" y="10" width="30" height="30" rx="4" fill="none" stroke="currentColor" strokeWidth="7" />
              <rect x="10" y="80" width="30" height="30" rx="4" fill="none" stroke="currentColor" strokeWidth="7" />
              <rect x="52" y="10" width="8" height="8" />
              <rect x="52" y="26" width="8" height="8" />
              <rect x="80" y="52" width="8" height="8" />
              <rect x="96" y="52" width="8" height="8" />
              <rect x="52" y="52" width="8" height="8" />
              <rect x="68" y="68" width="8" height="8" />
              <rect x="88" y="80" width="8" height="8" />
              <rect x="52" y="96" width="8" height="8" />
              <rect x="72" y="96" width="8" height="8" />
              <rect x="100" y="100" width="10" height="10" />
            </g>
          </svg>
        </div>
        <p className="sheet-note">
          Point the camera at a customer's QR code. Prototype only — no real payment is
          processed or verified.
        </p>
        <button type="button" className="sheet-submit" onClick={simulate}>
          Simulate a {formatNaira(DEMO_AMOUNT)} QR payment
        </button>
      </div>
    </Sheet>
  )
}
