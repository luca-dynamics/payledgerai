import { useApp, type SheetName } from '../store'
import { useTabNav, type Tab } from './tabNav'

interface Action {
  label: string
  tab?: Tab
  sheet?: SheetName
  icon: JSX.Element
}

const icon = (paths: JSX.Element) => (
  <svg
    width="20"
    height="20"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.9"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    {paths}
  </svg>
)

const actions: Action[] = [
  {
    label: 'Record sale',
    sheet: 'record-sale',
    icon: icon(
      <>
        <circle cx="12" cy="12" r="9" />
        <path d="M12 8v8M8 12h8" />
      </>,
    ),
  },
  {
    label: 'New debt',
    tab: 'debt',
    icon: icon(
      <>
        <circle cx="9" cy="8" r="3.2" />
        <path d="M4 19c0-2.8 2.2-5 5-5 1.2 0 2.3.4 3.1 1.1" />
        <path d="M16 15h5M18.5 12.5v5" />
      </>,
    ),
  },
  {
    label: 'Scan QR',
    sheet: 'scan-qr',
    icon: icon(
      <>
        <rect x="4" y="4" width="7" height="7" rx="1.4" />
        <rect x="13" y="4" width="7" height="7" rx="1.4" />
        <rect x="4" y="13" width="7" height="7" rx="1.4" />
        <path d="M14 14h2v2M18 14h2M20 16v2M14 18h2v2" />
      </>,
    ),
  },
  {
    label: 'View report',
    tab: 'report',
    icon: icon(
      <>
        <path d="M4 19V5M4 19h16" />
        <path d="M8 15l3-4 3 2 4-6" />
      </>,
    ),
  },
]

// Real-product quick-action row under the dashboard banner.
export default function QuickActions() {
  const { go } = useTabNav()
  const { openSheet } = useApp()

  const handle = (a: Action) => {
    if (a.sheet) openSheet(a.sheet)
    else if (a.tab) go(a.tab)
  }

  return (
    <nav className="quick-actions" aria-label="Quick actions">
      {actions.map((a) => (
        <button
          key={a.label}
          type="button"
          className="quick-action"
          onClick={() => handle(a)}
        >
          <span className="qa-icon">{a.icon}</span>
          <span className="qa-label">{a.label}</span>
        </button>
      ))}
    </nav>
  )
}
