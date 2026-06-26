import { merchant } from '../data/mockData'

interface TopBarProps {
  title: string
  subtitle?: string
}

export default function TopBar({ title, subtitle }: TopBarProps) {
  return (
    <header className="topbar">
      <div className="topbar-text">
        <p className="topbar-eyebrow">{title}</p>
        <h1 className="topbar-title">{subtitle ?? merchant.businessName}</h1>
      </div>
      <div className="avatar" aria-hidden="true">
        {merchant.initials}
      </div>
    </header>
  )
}
