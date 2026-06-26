import { NavLink } from 'react-router-dom'

interface NavItem {
  to: string
  label: string
  icon: JSX.Element
}

function iconFor(name: string): JSX.Element {
  const common = {
    width: 22,
    height: 22,
    viewBox: '0 0 24 24',
    fill: 'none',
    stroke: 'currentColor',
    strokeWidth: 1.9,
    strokeLinecap: 'round' as const,
    strokeLinejoin: 'round' as const,
  }
  switch (name) {
    case 'dashboard':
      return (
        <svg {...common}>
          <rect x="3" y="3" width="7" height="9" rx="1.5" />
          <rect x="14" y="3" width="7" height="5" rx="1.5" />
          <rect x="14" y="12" width="7" height="9" rx="1.5" />
          <rect x="3" y="16" width="7" height="5" rx="1.5" />
        </svg>
      )
    case 'ledger':
      return (
        <svg {...common}>
          <path d="M5 4h11l3 3v13a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V5a1 1 0 0 1 1-1Z" />
          <path d="M8 9h7M8 13h7M8 17h4" />
        </svg>
      )
    case 'debt':
      return (
        <svg {...common}>
          <circle cx="12" cy="12" r="8" />
          <path d="M12 7v10M9.5 9.2c0-1.1 1.1-1.8 2.5-1.8s2.5.7 2.5 1.8-1.1 1.6-2.5 1.8-2.5.7-2.5 1.8 1.1 1.8 2.5 1.8 2.5-.7 2.5-1.8" />
        </svg>
      )
    case 'fraud':
      return (
        <svg {...common}>
          <path d="M12 3 5 6v6c0 4 3 6.5 7 9 4-2.5 7-5 7-9V6l-7-3Z" />
          <path d="M9.5 12l1.8 1.8L15 10" />
        </svg>
      )
    case 'report':
      return (
        <svg {...common}>
          <path d="M4 19V5M4 19h16" />
          <rect x="7" y="11" width="3" height="5" rx="0.6" />
          <rect x="12" y="8" width="3" height="8" rx="0.6" />
          <rect x="17" y="13" width="3" height="3" rx="0.6" />
        </svg>
      )
    default:
      return <svg {...common} />
  }
}

const items: NavItem[] = [
  { to: '/app', label: 'Dashboard', icon: iconFor('dashboard') },
  { to: '/ledger', label: 'Ledger', icon: iconFor('ledger') },
  { to: '/debt', label: 'Debt', icon: iconFor('debt') },
  { to: '/fraud', label: 'Fraud', icon: iconFor('fraud') },
  { to: '/report', label: 'Report', icon: iconFor('report') },
]

export default function BottomNav() {
  return (
    <nav className="bottom-nav" aria-label="Primary">
      {items.map((item) => (
        <NavLink
          key={item.to}
          to={item.to}
          className={({ isActive }) => 'nav-item' + (isActive ? ' active' : '')}
        >
          <span className="nav-icon">{item.icon}</span>
          <span className="nav-label">{item.label}</span>
        </NavLink>
      ))}
    </nav>
  )
}
