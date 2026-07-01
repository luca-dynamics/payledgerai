import { useMemo, useState } from 'react'
import Disclaimer from '../components/Disclaimer'
import Section from '../components/Section'
import AppBanner from '../components/AppBanner'
import TransactionItem from '../components/TransactionItem'
import { stats, transactions } from '../data/mockData'
import type { PaymentMethod } from '../types'
import { formatNaira, formatNairaShort } from '../utils/format'

type Filter = 'All' | PaymentMethod

const filters: Filter[] = ['All', 'Cash', 'Transfer', 'POS', 'QR']

export default function Ledger() {
  const [active, setActive] = useState<Filter>('All')

  const filtered = useMemo(
    () =>
      active === 'All'
        ? transactions
        : transactions.filter((t) => t.method === active),
    [active],
  )

  const total = useMemo(
    () => filtered.reduce((sum, t) => sum + t.amount, 0),
    [filtered],
  )

  return (
    <div className="page">
      <AppBanner
        eyebrow="Smart Ledger"
        title="Business memory"
        subtitle="Every cash, transfer, POS and QR payment, recorded after it lands — your trusted sales history."
        highlight={{ label: 'Today', value: formatNairaShort(stats.todaysSales) }}
      />

      <Disclaimer />

      <div className="filter-row" role="tablist" aria-label="Payment method filter">
        {filters.map((f) => (
          <button
            key={f}
            type="button"
            role="tab"
            aria-selected={active === f}
            className={'filter-chip' + (active === f ? ' active' : '')}
            onClick={() => setActive(f)}
          >
            {f}
          </button>
        ))}
      </div>

      <div className="ledger-summary">
        <span>{filtered.length} entries</span>
        <span className="ledger-total">{formatNaira(total)}</span>
      </div>

      <Section title={active === 'All' ? 'All transactions' : active + ' payments'}>
        <ul className="txn-list">
          {filtered.map((txn) => (
            <TransactionItem key={txn.id} txn={txn} />
          ))}
        </ul>
      </Section>

      <Disclaimer />
    </div>
  )
}
