import type { ReactNode } from 'react'

interface SectionProps {
  title: string
  subtitle?: string
  action?: ReactNode
  children: ReactNode
}

export default function Section({ title, subtitle, action, children }: SectionProps) {
  return (
    <section className="section">
      <div className="section-head">
        <div>
          <h2 className="section-title">{title}</h2>
          {subtitle ? <p className="section-subtitle">{subtitle}</p> : null}
        </div>
        {action ? <div className="section-action">{action}</div> : null}
      </div>
      {children}
    </section>
  )
}
