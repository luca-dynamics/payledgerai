import { merchant } from '../data/mockData'
import ThemeToggle from './ThemeToggle'

interface AppBannerProps {
  eyebrow: string
  title: string
  subtitle?: string
  /** Optional highlight metric shown on the right (e.g. today's sales). */
  highlight?: { label: string; value: string }
  /** Optional circular score ring shown on the right (e.g. credit readiness). */
  ring?: { label: string; value: number; max?: number }
  /** Show the merchant avatar (dashboard). */
  showAvatar?: boolean
  /** 'hero' = tall dashboard banner, 'slim' = compact page header. */
  variant?: 'hero' | 'slim'
}

const RING_R = 28
const RING_C = 2 * Math.PI * RING_R

// Premium in-app banner used at the top of every screen.
// Layered gradient + decorative SVG art for a polished, product-grade header.
export default function AppBanner({
  eyebrow,
  title,
  subtitle,
  highlight,
  ring,
  showAvatar = false,
  variant = 'slim',
}: AppBannerProps) {
  const ringDash = ring ? (ring.value / (ring.max ?? 100)) * RING_C : 0
  return (
    <header className={'banner banner-' + variant}>
      <svg className="banner-art" viewBox="0 0 400 200" preserveAspectRatio="none" aria-hidden="true">
        <defs>
          <radialGradient id="bg1" cx="15%" cy="20%" r="80%">
            <stop offset="0%" stopColor="#22c55e" stopOpacity="0.55" />
            <stop offset="100%" stopColor="#22c55e" stopOpacity="0" />
          </radialGradient>
          <radialGradient id="bg2" cx="90%" cy="85%" r="70%">
            <stop offset="0%" stopColor="#6ee7a8" stopOpacity="0.35" />
            <stop offset="100%" stopColor="#6ee7a8" stopOpacity="0" />
          </radialGradient>
        </defs>
        <rect width="400" height="200" fill="url(#bg1)" />
        <rect width="400" height="200" fill="url(#bg2)" />
        <g stroke="rgba(255,255,255,0.12)" fill="none" strokeWidth="1.2">
          <path d="M0 150 Q 100 110 200 140 T 400 120" />
          <path d="M0 170 Q 110 135 210 160 T 400 145" />
        </g>
        <g fill="rgba(255,255,255,0.10)">
          <circle cx="330" cy="46" r="34" />
          <circle cx="368" cy="120" r="16" />
        </g>
      </svg>

      <div className="banner-body">
        <div className="banner-text">
          <p className="banner-eyebrow">{eyebrow}</p>
          <h1 className="banner-title">{title}</h1>
          {subtitle ? <p className="banner-subtitle">{subtitle}</p> : null}
        </div>

        <div className="banner-actions">
          {ring ? (
            <div className="banner-ring" title={`${ring.label} ${ring.value}/${ring.max ?? 100}`}>
              <span className="ring-wrap">
                <svg viewBox="0 0 64 64" width="64" height="64" aria-hidden="true">
                  <circle className="br-track" cx="32" cy="32" r={RING_R} />
                  <circle
                    className="br-fill"
                    cx="32"
                    cy="32"
                    r={RING_R}
                    strokeDasharray={`${ringDash} ${RING_C}`}
                    transform="rotate(-90 32 32)"
                  />
                </svg>
                <span className="br-value">{ring.value}</span>
              </span>
              <span className="br-label">{ring.label}</span>
            </div>
          ) : highlight ? (
            <div className="banner-highlight">
              <span className="bh-value">{highlight.value}</span>
              <span className="bh-label">{highlight.label}</span>
            </div>
          ) : showAvatar ? (
            <div className="banner-avatar" aria-hidden="true">
              {merchant.initials}
            </div>
          ) : null}
        </div>
      </div>

      <div className="banner-foot">
        <span className="banner-badge">
          <span className="banner-badge-dot" aria-hidden="true" />
          Prototype · no real payments
        </span>
        <ThemeToggle />
      </div>
    </header>
  )
}
