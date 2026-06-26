interface StatCardProps {
  label: string
  value: string
  hint?: string
  tone?: 'default' | 'positive' | 'warning' | 'danger' | 'brand'
  icon?: JSX.Element
}

export default function StatCard({
  label,
  value,
  hint,
  tone = 'default',
  icon,
}: StatCardProps) {
  return (
    <div className={'stat-card tone-' + tone}>
      <div className="stat-head">
        <span className="stat-label">{label}</span>
        {icon ? <span className="stat-icon">{icon}</span> : null}
      </div>
      <p className="stat-value">{value}</p>
      {hint ? <p className="stat-hint">{hint}</p> : null}
    </div>
  )
}
