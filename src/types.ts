// Shared domain types for PayLedger AI.
// Prototype only. PayLedger AI does not process or verify real payments.

export type PaymentMethod = 'Cash' | 'Transfer' | 'POS' | 'QR'

export type RiskLevel = 'low' | 'medium' | 'high'

export interface Merchant {
  businessName: string
  businessType: string
  targetUserType: string
  owner: string
  initials: string
}

export interface DashboardStats {
  todaysSales: number
  todaysProfit: number
  outstandingDebt: number
  creditReadiness: number // out of 100
  riskAlerts: number
  stockAlerts: number
}

export interface Transaction {
  id: string
  customer: string
  item: string
  amount: number
  method: PaymentMethod
  time: string
  status: 'completed' | 'pending' | 'flagged'
}

export interface Debtor {
  id: string
  name: string
  phoneHint: string
  amount: number
  since: string
  lastContact: string
  risk: RiskLevel
}

export interface FraudFlag {
  id: string
  title: string
  detail: string
  method: PaymentMethod
  level: RiskLevel
  time: string
}

export interface FraudChecklistItem {
  id: string
  label: string
  done: boolean
}

export interface StockItem {
  id: string
  name: string
  remaining: number
  unit: string
  status: 'ok' | 'low' | 'critical'
}

export interface ReadinessFactor {
  id: string
  label: string
  score: number // 0-100 contribution strength
  note: string
}
