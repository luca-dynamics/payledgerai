import { createContext, useCallback, useContext, useState, type ReactNode } from 'react'
import {
  debtors as seedDebtors,
  stats as seedStats,
  transactions as seedTxns,
} from './data/mockData'
import type { Debtor, PaymentMethod, Transaction } from './types'

export type SheetName = 'record-sale' | 'scan-qr'

interface Toast {
  id: number
  msg: string
}

interface NewSale {
  customer?: string
  item?: string
  amount: number
  method: PaymentMethod
}

interface AppContextValue {
  transactions: Transaction[]
  debtors: Debtor[]
  todaysSales: number
  outstandingDebt: number
  addSale: (sale: NewSale) => void
  markDebtPaid: (id: string) => void
  toasts: Toast[]
  toast: (msg: string) => void
  activeSheet: SheetName | null
  openSheet: (name: SheetName) => void
  closeSheet: () => void
}

const AppContext = createContext<AppContextValue>(null as unknown as AppContextValue)

export const useApp = (): AppContextValue => useContext(AppContext)

let idSeq = 0

// All actions mutate local state only — no real payment or bank interaction.
export function AppProvider({ children }: { children: ReactNode }) {
  const [transactions, setTransactions] = useState<Transaction[]>(seedTxns)
  const [debtors, setDebtors] = useState<Debtor[]>(seedDebtors)
  const [extraSales, setExtraSales] = useState(0)
  const [toasts, setToasts] = useState<Toast[]>([])
  const [activeSheet, setActiveSheet] = useState<SheetName | null>(null)

  const toast = useCallback((msg: string) => {
    const id = ++idSeq
    setToasts((prev) => [...prev, { id, msg }])
    window.setTimeout(() => {
      setToasts((prev) => prev.filter((t) => t.id !== id))
    }, 2600)
  }, [])

  const addSale = useCallback((sale: NewSale) => {
    const id = 'sale-' + ++idSeq
    setTransactions((prev) => [
      {
        id,
        customer: sale.customer?.trim() || 'Walk-in',
        item: sale.item?.trim() || 'Quick sale',
        amount: sale.amount,
        method: sale.method,
        time: 'Just now',
        status: 'completed',
      },
      ...prev,
    ])
    setExtraSales((s) => s + sale.amount)
  }, [])

  const markDebtPaid = useCallback((id: string) => {
    setDebtors((prev) => prev.filter((d) => d.id !== id))
  }, [])

  const value: AppContextValue = {
    transactions,
    debtors,
    todaysSales: seedStats.todaysSales + extraSales,
    outstandingDebt: debtors.reduce((sum, d) => sum + d.amount, 0),
    addSale,
    markDebtPaid,
    toasts,
    toast,
    activeSheet,
    openSheet: (name) => setActiveSheet(name),
    closeSheet: () => setActiveSheet(null),
  }

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>
}
