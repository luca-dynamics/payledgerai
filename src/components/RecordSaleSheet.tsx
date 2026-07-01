import { useState } from 'react'
import { useApp } from '../store'
import type { PaymentMethod } from '../types'
import { formatNaira } from '../utils/format'
import Sheet from './Sheet'

const methods: PaymentMethod[] = ['Cash', 'Transfer', 'POS', 'QR']

export default function RecordSaleSheet() {
  const { addSale, toast, closeSheet } = useApp()
  const [amount, setAmount] = useState('')
  const [customer, setCustomer] = useState('')
  const [item, setItem] = useState('')
  const [method, setMethod] = useState<PaymentMethod>('Cash')

  const amt = Number(amount)
  const valid = amt > 0

  const submit = () => {
    if (!valid) return
    addSale({ customer, item, amount: amt, method })
    toast('Sale recorded · ' + formatNaira(amt))
    closeSheet()
  }

  return (
    <Sheet title="Record a sale">
      <div className="form">
        <label className="field">
          <span className="field-label">Amount (₦)</span>
          <input
            className="input input-amount"
            inputMode="numeric"
            autoFocus
            value={amount}
            onChange={(e) => setAmount(e.target.value.replace(/[^0-9]/g, ''))}
            placeholder="0"
          />
        </label>

        <div className="field">
          <span className="field-label">Payment method</span>
          <div className="method-choices">
            {methods.map((m) => (
              <button
                key={m}
                type="button"
                className={'method-choice' + (method === m ? ' active' : '')}
                onClick={() => setMethod(m)}
              >
                {m}
              </button>
            ))}
          </div>
        </div>

        <label className="field">
          <span className="field-label">Customer (optional)</span>
          <input
            className="input"
            value={customer}
            onChange={(e) => setCustomer(e.target.value)}
            placeholder="Walk-in"
          />
        </label>

        <label className="field">
          <span className="field-label">Item (optional)</span>
          <input
            className="input"
            value={item}
            onChange={(e) => setItem(e.target.value)}
            placeholder="Quick sale"
          />
        </label>

        <button type="button" className="sheet-submit" disabled={!valid} onClick={submit}>
          Save sale
        </button>
        <p className="sheet-note">Prototype only. No real payment is processed.</p>
      </div>
    </Sheet>
  )
}
