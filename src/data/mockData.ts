// All data below is MOCK DATA for demonstration only.
// Prototype only. PayLedger AI does not process or verify real payments.

import type {
  Debtor,
  DashboardStats,
  FraudChecklistItem,
  FraudFlag,
  Merchant,
  ReadinessFactor,
  StockItem,
  Transaction,
} from '../types'

export const DISCLAIMER =
  'Prototype only. PayLedger AI does not process or verify real payments.'

export const merchant: Merchant = {
  businessName: "Amaka's Campus Kitchen",
  businessType: 'Campus food vendor',
  targetUserType: 'Student entrepreneur / campus vendor',
  owner: 'Amaka O.',
  initials: 'AC',
}

export const stats: DashboardStats = {
  todaysSales: 82500,
  todaysProfit: 21800,
  outstandingDebt: 13500,
  creditReadiness: 76,
  riskAlerts: 2,
  stockAlerts: 4,
}

export const aiInsight =
  'Your food sales increased today. Rice and drinks sold fastest. Restock drinks before evening rush and follow up with customers owing ₦13,500.'

export const transactions: Transaction[] = [
  {
    id: 't1',
    customer: 'Chinedu (Hostel B)',
    item: 'Jollof rice + chicken',
    amount: 3500,
    method: 'Transfer',
    time: '1:42 PM',
    status: 'completed',
  },
  {
    id: 't2',
    customer: 'Walk-in',
    item: 'Fried rice + drink',
    amount: 2800,
    method: 'Cash',
    time: '1:20 PM',
    status: 'completed',
  },
  {
    id: 't3',
    customer: 'Blessing',
    item: 'Small chops tray',
    amount: 6000,
    method: 'POS',
    time: '12:55 PM',
    status: 'completed',
  },
  {
    id: 't4',
    customer: 'Unknown sender',
    item: 'Rice (claimed paid)',
    amount: 3500,
    method: 'Transfer',
    time: '12:30 PM',
    status: 'flagged',
  },
  {
    id: 't5',
    customer: 'Tunde',
    item: 'Bottled water x6',
    amount: 1800,
    method: 'QR',
    time: '11:48 AM',
    status: 'completed',
  },
  {
    id: 't6',
    customer: 'Amara (Block C)',
    item: 'Lunch combo (owing)',
    amount: 2500,
    method: 'Cash',
    time: '11:10 AM',
    status: 'pending',
  },
]

export const debtors: Debtor[] = [
  {
    id: 'd1',
    name: 'Amara (Block C)',
    phoneHint: '0803••••812',
    amount: 4500,
    since: '5 days ago',
    lastContact: 'Reminded yesterday',
    risk: 'medium',
  },
  {
    id: 'd2',
    name: 'Kelvin (Final year)',
    phoneHint: '0701••••330',
    amount: 6000,
    since: '12 days ago',
    lastContact: 'No reply to last 2 reminders',
    risk: 'high',
  },
  {
    id: 'd3',
    name: 'Ngozi',
    phoneHint: '0815••••907',
    amount: 3000,
    since: '2 days ago',
    lastContact: 'Promised to pay Friday',
    risk: 'low',
  },
]

export const fraudFlags: FraudFlag[] = [
  {
    id: 'f1',
    title: 'Unconfirmed transfer claim',
    detail:
      'Customer claimed a ₦3,500 transfer but no matching alert was seen. Confirm before releasing food.',
    method: 'Transfer',
    level: 'high',
    time: '12:30 PM',
  },
  {
    id: 'f2',
    title: 'Repeat “network failed” at POS',
    detail:
      'Same customer reported a failed POS payment 3 times this week. Watch for double-spend disputes.',
    method: 'POS',
    level: 'medium',
    time: 'Yesterday',
  },
]

export const fraudChecklist: FraudChecklistItem[] = [
  { id: 'c1', label: 'Confirm transfer alert before releasing goods', done: true },
  { id: 'c2', label: 'Match POS receipt to sale amount', done: true },
  { id: 'c3', label: 'Verify sender name on incoming transfers', done: false },
  { id: 'c4', label: 'Keep a record of disputed payments', done: false },
]

export const stockItems: StockItem[] = [
  { id: 's1', name: 'Bottled drinks', remaining: 8, unit: 'bottles', status: 'critical' },
  { id: 's2', name: 'Rice (raw)', remaining: 4, unit: 'kg', status: 'low' },
  { id: 's3', name: 'Chicken portions', remaining: 6, unit: 'pieces', status: 'low' },
  { id: 's4', name: 'Takeaway packs', remaining: 9, unit: 'packs', status: 'low' },
]

export const readinessFactors: ReadinessFactor[] = [
  {
    id: 'r1',
    label: 'Consistent daily records',
    score: 88,
    note: '21 of last 30 days logged',
  },
  {
    id: 'r2',
    label: 'Mixed payment acceptance',
    score: 82,
    note: 'Cash, transfer, POS and QR all in use',
  },
  {
    id: 'r3',
    label: 'Debt recovery rate',
    score: 64,
    note: '₦13,500 still outstanding',
  },
  {
    id: 'r4',
    label: 'Dispute & fraud hygiene',
    score: 70,
    note: '2 open risk alerts to resolve',
  },
]
