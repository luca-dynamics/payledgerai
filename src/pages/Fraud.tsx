import { useState } from 'react'
import Disclaimer from '../components/Disclaimer'
import MethodTag from '../components/MethodTag'
import Section from '../components/Section'
import AppBanner from '../components/AppBanner'
import { fraudChecklist, fraudFlags } from '../data/mockData'

const levelLabel: Record<string, string> = {
  low: 'Low',
  medium: 'Medium',
  high: 'High',
}

export default function Fraud() {
  const [checks, setChecks] = useState(fraudChecklist)

  const toggle = (id: string) =>
    setChecks((prev) =>
      prev.map((c) => (c.id === id ? { ...c, done: !c.done } : c)),
    )

  const doneCount = checks.filter((c) => c.done).length

  return (
    <div className="page">
      <AppBanner
        eyebrow="Fraud Shield"
        title="Fraud-risk guidance"
        subtitle="Fraud-risk guidance, not bank verification. Spot suspicious payments early and avoid disputes."
      />

      <Disclaimer />

      <Section
        title="Suspicious payment log"
        subtitle="Flagged for your review"
      >
        <ul className="flag-list">
          {fraudFlags.map((f) => (
            <li key={f.id} className={'flag level-' + f.level}>
              <div className="flag-top">
                <span className="flag-title">{f.title}</span>
                <span className={'level-tag level-' + f.level}>
                  {levelLabel[f.level]} risk
                </span>
              </div>
              <p className="flag-detail">{f.detail}</p>
              <div className="flag-foot">
                <MethodTag method={f.method} />
                <span className="flag-time">{f.time}</span>
              </div>
            </li>
          ))}
        </ul>
      </Section>

      <Section
        title="Fraud-awareness checklist"
        subtitle={doneCount + ' of ' + checks.length + ' good habits done'}
      >
        <ul className="checklist">
          {checks.map((c) => (
            <li key={c.id} className={'check-item' + (c.done ? ' done' : '')}>
              <button
                type="button"
                className="check-box"
                aria-pressed={c.done}
                aria-label={c.label}
                onClick={() => toggle(c.id)}
              >
                {c.done ? '✓' : ''}
              </button>
              <span className="check-label">{c.label}</span>
            </li>
          ))}
        </ul>
      </Section>

      <Disclaimer />
    </div>
  )
}
