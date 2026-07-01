interface LogoProps {
  size?: number
}

// PayLedger AI mark: a green tile with ledger rows whose last row resolves into
// a check — "every payment becomes a trusted record."
export default function Logo({ size = 30 }: LogoProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 40 40"
      fill="none"
      role="img"
      aria-label="PayLedger AI"
    >
      <defs>
        <linearGradient id="pl-logo-gradient" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor="#22c55e" />
          <stop offset="1" stopColor="#0f6b3d" />
        </linearGradient>
      </defs>
      <rect width="40" height="40" rx="11" fill="url(#pl-logo-gradient)" />
      <g
        stroke="#ffffff"
        strokeWidth="2.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M12 14H28" />
        <path d="M12 20H28" />
        <path d="M12 26H19.5" />
        <path d="M22 26l2.7 2.7L32 21.6" />
      </g>
    </svg>
  )
}
