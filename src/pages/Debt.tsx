import Disclaimer from '../components/Disclaimer'
import Section from '../components/Section'
import AppBanner from '../components/AppBanner'
import { debtors } from '../data/mockData'
import { formatNaira, formatNairaShort } from '../utils/format'

const riskLabel: Record<string, string> = {
  low: 'Low risk',
  medium: 'Watch',
  high: 'Follow up now',
}

export default function Debt() {
  const total = debtors.reduce((sum, d) => sum + d.amount, 0)

  return (
    <div className="page">
      <AppBanner
        eyebrow="Debt Book"
        title="Who owes you"
        subtitle="Track customers buying on credit and follow up before small debts become bad debts."
        highlight={{ label: 'Outstanding', value: formatNairaShort(total) }}
      />

      <Disclaimer />

      <div className="debt-hero">
        <span className="debt-hero-label">Total outstanding</span>
        <span className="debt-hero-value">{formatNaira(total)}</span>
        <span className="debt-hero-sub">{debtors.length} customers owing</span>
      </div>

      <Section title="Customers owing">
        <ul className="debtor-list">
          {debtors.map((d) => (
            <li key={d.id} className={'debtor risk-' + d.risk}>
              <div className="debtor-top">
                <span className="debtor-name">{d.name}</span>
                <span className="debtor-amount">{formatNaira(d.amount)}</span>
              </div>
              <div className="debtor-meta">
                <span>{d.phoneHint}</span>
                <span className="dot-sep">·</span>
                <span>Owing {d.since}</span>
              </div>
              <div className="debtor-foot">
                <span className={'risk-tag risk-' + d.risk}>{riskLabel[d.risk]}</span>
                <span className="debtor-contact">{d.lastContact}</span>
              </div>
              <div className="debtor-actions">
                <button type="button" className="mini-btn">
                  Send reminder
                </button>
                <button type="button" className="mini-btn ghost">
                  Mark paid
                </button>
              </div>
            </li>
          ))}
        </ul>
      </Section>

      <Disclaimer />
    </div>
  )
}
