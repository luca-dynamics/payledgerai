import { DISCLAIMER } from '../data/mockData'

interface DisclaimerProps {
  variant?: 'inline' | 'pill'
}

export default function Disclaimer({ variant = 'inline' }: DisclaimerProps) {
  if (variant === 'pill') {
    // Compact header badge — the full disclaimer lives in the footer and on
    // every app screen. The full text is kept accessible via title/aria-label.
    return (
      <span className="disclaimer-pill" title={DISCLAIMER} aria-label={DISCLAIMER}>
        <span className="dot" aria-hidden="true" />
        Prototype
      </span>
    )
  }
  return (
    <p className="disclaimer" role="note">
      <span className="disclaimer-icon" aria-hidden="true">
        ⓘ
      </span>
      {DISCLAIMER}
    </p>
  )
}
