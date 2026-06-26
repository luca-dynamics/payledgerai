interface AIInsightCardProps {
  insight: string
}

// Gemini-style merchant insight assistant (mocked).
export default function AIInsightCard({ insight }: AIInsightCardProps) {
  return (
    <section className="ai-card" aria-label="AI insight">
      <div className="ai-head">
        <span className="ai-badge">
          <span className="ai-spark" aria-hidden="true">
            ✦
          </span>
          AI Insight
        </span>
        <span className="ai-sub">Merchant Coach</span>
      </div>
      <p className="ai-body">{insight}</p>
      <div className="ai-actions">
        <button type="button" className="ai-chip">
          Restock drinks
        </button>
        <button type="button" className="ai-chip">
          Send debt reminder
        </button>
      </div>
    </section>
  )
}
