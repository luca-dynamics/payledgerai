import AIInsightCard from '../components/AIInsightCard'
import Disclaimer from '../components/Disclaimer'
import Section from '../components/Section'
import StatCard from '../components/StatCard'
import TopBar from '../components/TopBar'
import TransactionItem from '../components/TransactionItem'
import {
  aiInsight,
  merchant,
  stats,
  transactions,
} from '../data/mockData'
import { formatNaira } from '../utils/format'

const whyItMatters = [
  'Many student entrepreneurs, campus vendors, POS agents and informal traders receive payments daily but lack trusted records.',
  'PayLedger AI helps them stay organized after the payment lands.',
  'It helps reduce payment disputes through fraud-risk guidance.',
  'It helps merchants become more credit-ready through clean business records.',
]

const innovationFit = [
  {
    tag: 'OPay fit',
    text: 'Supports merchants and digital payment users after transactions happen.',
  },
  {
    tag: 'Google / Gemini fit',
    text: 'AI-powered business insight and merchant coaching.',
  },
  {
    tag: '3MTT fit',
    text: 'Software development, AI, data analysis, UI/UX and cybersecurity awareness.',
  },
  {
    tag: 'Student fit',
    text: 'Starts with campus vendors and student entrepreneurs, then scales to informal merchants.',
  },
]

export default function Dashboard() {
  return (
    <div className="page">
      <TopBar title="Good afternoon" subtitle={merchant.businessName} />

      <p className="business-line">
        {merchant.businessType} · {merchant.targetUserType}
      </p>

      <Disclaimer />

      <Section title="Today at a glance">
        <div className="stat-grid">
          <StatCard
            label="Today's Sales"
            value={formatNaira(stats.todaysSales)}
            hint="Across cash, transfer, POS & QR"
            tone="brand"
          />
          <StatCard
            label="Today's Profit"
            value={formatNaira(stats.todaysProfit)}
            hint="After estimated costs"
            tone="positive"
          />
          <StatCard
            label="Outstanding Debt"
            value={formatNaira(stats.outstandingDebt)}
            hint="3 customers owing"
            tone="warning"
          />
          <StatCard
            label="Stock Alerts"
            value={String(stats.stockAlerts)}
            hint="Items running low"
            tone="warning"
          />
          <StatCard
            label="Credit Readiness"
            value={stats.creditReadiness + '/100'}
            hint="Trending up this week"
            tone="brand"
          />
          <StatCard
            label="Risk Alerts"
            value={String(stats.riskAlerts)}
            hint="Need your review"
            tone="danger"
          />
        </div>
      </Section>

      <AIInsightCard insight={aiInsight} />

      <Section
        title="Recent transactions"
        subtitle="Cash · Transfer · POS · QR"
      >
        <ul className="txn-list">
          {transactions.map((txn) => (
            <TransactionItem key={txn.id} txn={txn} />
          ))}
        </ul>
      </Section>

      <Section title="Why this matters">
        <ul className="why-list">
          {whyItMatters.map((point, i) => (
            <li key={i} className="why-item">
              <span className="why-check" aria-hidden="true">
                ✓
              </span>
              <span>{point}</span>
            </li>
          ))}
        </ul>
      </Section>

      <Section title="Innovation fit">
        <div className="fit-grid">
          {innovationFit.map((f) => (
            <div key={f.tag} className="fit-card">
              <span className="fit-tag">{f.tag}</span>
              <p>{f.text}</p>
            </div>
          ))}
        </div>
      </Section>

      <Disclaimer />
    </div>
  )
}
