import Disclaimer from '../components/Disclaimer'
import Section from '../components/Section'
import AppBanner from '../components/AppBanner'
import { useApp } from '../store'
import { formatNaira, formatNairaShort } from '../utils/format'

const riskLabel: Record<string, string> = {
  low: 'Low risk',
  medium: 'Watch',
  high: 'Follow up now',
}

export default function Debt() {
  const { debtors, outstandingDebt, markDebtPaid, toast } = useApp()
  const total = outstandingDebt

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
        {debtors.length === 0 ? (
          <div className="empty-state">
            <span className="empty-check" aria-hidden="true">
              ✓
            </span>
            <p>All debts cleared. Nothing outstanding right now.</p>
          </div>
        ) : null}
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
                <button
                  type="button"
                  className="mini-btn"
                  onClick={() => toast(`Payment reminder sent to ${d.name}`)}
                >
                  Send reminder
                </button>
                <button
                  type="button"
                  className="mini-btn ghost"
                  onClick={() => {
                    markDebtPaid(d.id)
                    toast(`${d.name} marked as paid`)
                  }}
                >
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
