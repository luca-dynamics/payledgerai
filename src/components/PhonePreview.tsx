import { aiInsight } from '../data/mockData'

// A static, decorative phone mockup used in the desktop landing hero.
// Shows a condensed PayLedger dashboard so judges immediately "get" the product.
export default function PhonePreview() {
  return (
    <div className="phone" role="img" aria-label="Preview of the PayLedger AI merchant dashboard">
      <div className="phone-notch" aria-hidden="true" />
      <div className="phone-screen">
        <div className="pp-top">
          <div>
            <p className="pp-eyebrow">Good afternoon</p>
            <p className="pp-title">Amaka's Campus Kitchen</p>
          </div>
          <span className="pp-avatar" aria-hidden="true">
            AC
          </span>
        </div>

        <div className="pp-stats">
          <div className="pp-stat">
            <span className="pp-stat-label">Today's Sales</span>
            <span className="pp-stat-value">₦82,500</span>
          </div>
          <div className="pp-stat">
            <span className="pp-stat-label">Profit</span>
            <span className="pp-stat-value">₦21,800</span>
          </div>
        </div>

        <div className="pp-ai">
          <span className="pp-ai-badge">
            <span aria-hidden="true">✦</span> AI Insight
          </span>
          <p className="pp-ai-body">{aiInsight}</p>
        </div>

        <div className="pp-txn">
          <div className="pp-txn-row">
            <span className="pp-txn-name">Chinedu</span>
            <span className="pp-txn-amt">₦3,500</span>
          </div>
          <span className="pp-tag pp-transfer">Transfer</span>
        </div>
        <div className="pp-txn">
          <div className="pp-txn-row">
            <span className="pp-txn-name">Blessing</span>
            <span className="pp-txn-amt">₦6,000</span>
          </div>
          <span className="pp-tag pp-pos">POS</span>
        </div>
      </div>
    </div>
  )
}
