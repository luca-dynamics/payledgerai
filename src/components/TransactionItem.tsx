import type { Transaction } from '../types'
import { formatNaira } from '../utils/format'
import MethodTag from './MethodTag'

interface TransactionItemProps {
  txn: Transaction
}

export default function TransactionItem({ txn }: TransactionItemProps) {
  return (
    <li className={'txn' + (txn.status === 'flagged' ? ' txn-flagged' : '')}>
      <div className="txn-main">
        <div className="txn-top">
          <span className="txn-customer">{txn.customer}</span>
          <span className="txn-amount">{formatNaira(txn.amount)}</span>
        </div>
        <div className="txn-bottom">
          <span className="txn-item">{txn.item}</span>
          <span className="txn-time">{txn.time}</span>
        </div>
        <div className="txn-tags">
          <MethodTag method={txn.method} />
          {txn.status === 'flagged' ? (
            <span className="status-tag status-flagged">Needs review</span>
          ) : null}
          {txn.status === 'pending' ? (
            <span className="status-tag status-pending">On credit</span>
          ) : null}
        </div>
      </div>
    </li>
  )
}
