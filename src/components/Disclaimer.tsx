import { DISCLAIMER } from '../data/mockData'

interface DisclaimerProps {
  variant?: 'inline' | 'pill'
}

export default function Disclaimer({ variant = 'inline' }: DisclaimerProps) {
  if (variant === 'pill') {
    return (
      <span className="disclaimer-pill">
        <span className="dot" aria-hidden="true" />
        {DISCLAIMER}
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
