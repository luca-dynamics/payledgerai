import { merchant } from '../data/mockData'

interface AppBannerProps {
  eyebrow: string
  title: string
  subtitle?: string
  /** Optional highlight metric shown on the right (e.g. credit readiness). */
  highlight?: { label: string; value: string }
  /** Show the merchant avatar (dashboard). */
  showAvatar?: boolean
  /** 'hero' = tall dashboard banner, 'slim' = compact page header. */
  variant?: 'hero' | 'slim'
}

// Premium in-app banner used at the top of every screen.
// Layered gradient + decorative SVG art for a polished, product-grade header.
export default function AppBanner({
  eyebrow,
  title,
  subtitle,
  highlight,
  showAvatar = false,
  variant = 'slim',
}: AppBannerProps) {
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

        {highlight ? (
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

      <span className="banner-badge">
        <span className="banner-badge-dot" aria-hidden="true" />
        Prototype · no real payments
      </span>
    </header>
  )
}
