import { useApp } from '../store'
import RecordSaleSheet from './RecordSaleSheet'
import ScanQRSheet from './ScanQRSheet'

// Renders whichever bottom sheet is currently open.
export default function SheetHost() {
  const { activeSheet } = useApp()
  if (activeSheet === 'record-sale') return <RecordSaleSheet />
  if (activeSheet === 'scan-qr') return <ScanQRSheet />
  return null
}
