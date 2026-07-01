import { useApp } from '../store'

// Renders transient toasts inside the phone screen.
export default function ToastHost() {
  const { toasts } = useApp()
  if (!toasts.length) return null
  return (
    <div className="toast-wrap" role="status" aria-live="polite">
      {toasts.map((t) => (
        <div key={t.id} className="toast">
          <span className="toast-dot" aria-hidden="true" />
          {t.msg}
        </div>
      ))}
    </div>
  )
}
