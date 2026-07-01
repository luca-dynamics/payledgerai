import type { ReactNode } from 'react'
import { useApp } from '../store'

// Bottom-sheet modal, scoped to the phone screen (absolute within .app-shell).
export default function Sheet({ title, children }: { title: string; children: ReactNode }) {
  const { closeSheet } = useApp()
  return (
    <div className="sheet-overlay" onClick={closeSheet}>
      <div
        className="sheet"
        role="dialog"
        aria-modal="true"
        aria-label={title}
        onClick={(e) => e.stopPropagation()}
      >
        <span className="sheet-grab" aria-hidden="true" />
        <div className="sheet-head">
          <h3 className="sheet-title">{title}</h3>
          <button type="button" className="sheet-close" onClick={closeSheet} aria-label="Close">
            ✕
          </button>
        </div>
        {children}
      </div>
    </div>
  )
}
