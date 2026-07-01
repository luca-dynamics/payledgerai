import { Link } from 'react-router-dom'
import AIInsightCard from '../components/AIInsightCard'
import AppBanner from '../components/AppBanner'
import Disclaimer from '../components/Disclaimer'
import QuickActions from '../components/QuickActions'
import Section from '../components/Section'
import StatCard from '../components/StatCard'
import TransactionItem from '../components/TransactionItem'
import { aiInsight, merchant, stats, transactions } from '../data/mockData'
import { formatNaira } from '../utils/format'

export default function Dashboard() {
  const recent = transactions.slice(0, 4)

  return (
    <div className="page">
      <AppBanner
        variant="hero"
        eyebrow="Good afternoon"
        title={merchant.businessName}
        subtitle={merchant.businessType}
        highlight={{ label: 'Credit readiness', value: `${stats.creditReadiness}/100` }}
      />

      <QuickActions />

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
        action={
          <Link to="/ledger" className="link-action">
            See all →
          </Link>
        }
      >
        <ul className="txn-list">
          {recent.map((txn) => (
            <TransactionItem key={txn.id} txn={txn} />
          ))}
        </ul>
      </Section>

      <Disclaimer />
    </div>
  )
}
