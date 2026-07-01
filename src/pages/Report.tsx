import Disclaimer from '../components/Disclaimer'
import Section from '../components/Section'
import AppBanner from '../components/AppBanner'
import { readinessFactors, stats, stockItems } from '../data/mockData'

const stockLabel: Record<string, string> = {
  ok: 'OK',
  low: 'Low',
  critical: 'Restock now',
}

export default function Report() {
  const score = stats.creditReadiness
  const circumference = 2 * Math.PI * 52
  const dash = (score / 100) * circumference

  return (
    <div className="page">
      <AppBanner
        eyebrow="Credit Readiness"
        title="Report, not approval"
        subtitle="A credit-readiness report built from clean business records — not a loan approval or bank decision."
        highlight={{ label: 'Readiness', value: `${stats.creditReadiness}/100` }}
      />

      <Disclaimer />

      <section className="score-card">
        <div className="gauge">
          <svg viewBox="0 0 120 120" width="128" height="128">
            <circle className="gauge-track" cx="60" cy="60" r="52" />
            <circle
              className="gauge-fill"
              cx="60"
              cy="60"
              r="52"
              strokeDasharray={`${dash} ${circumference}`}
              transform="rotate(-90 60 60)"
            />
          </svg>
          <div className="gauge-center">
            <span className="gauge-value">{score}</span>
            <span className="gauge-max">/ 100</span>
          </div>
        </div>
        <div className="score-meta">
          <span className="score-badge">Building well</span>
          <p>
            Amaka's records are consistent and use multiple payment methods. Clearing
            outstanding debt and resolving risk alerts would push this higher.
          </p>
        </div>
      </section>

      <Section title="What shapes this score">
        <ul className="factor-list">
          {readinessFactors.map((f) => (
            <li key={f.id} className="factor">
              <div className="factor-top">
                <span className="factor-label">{f.label}</span>
                <span className="factor-score">{f.score}</span>
              </div>
              <div className="bar">
                <span className="bar-fill" style={{ width: f.score + '%' }} />
              </div>
              <span className="factor-note">{f.note}</span>
            </li>
          ))}
        </ul>
      </Section>

      <Section title="Inventory tracker" subtitle="Items running low">
        <ul className="stock-list">
          {stockItems.map((s) => (
            <li key={s.id} className={'stock-item stock-' + s.status}>
              <div className="stock-main">
                <span className="stock-name">{s.name}</span>
                <span className="stock-remaining">
                  {s.remaining} {s.unit} left
                </span>
              </div>
              <span className={'stock-tag stock-' + s.status}>
                {stockLabel[s.status]}
              </span>
            </li>
          ))}
        </ul>
      </Section>

      <Disclaimer />
    </div>
  )
}
