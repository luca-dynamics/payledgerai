// Display helpers. Amounts are mock values shown in Nigerian Naira (₦).

export function formatNaira(amount: number): string {
  return '₦' + amount.toLocaleString('en-NG')
}

export function formatNairaShort(amount: number): string {
  if (amount >= 1000) {
    const k = amount / 1000
    return '₦' + (Number.isInteger(k) ? k.toString() : k.toFixed(1)) + 'k'
  }
  return '₦' + amount.toString()
}
