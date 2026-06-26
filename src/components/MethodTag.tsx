import type { PaymentMethod } from '../types'

interface MethodTagProps {
  method: PaymentMethod
}

const classByMethod: Record<PaymentMethod, string> = {
  Cash: 'method-cash',
  Transfer: 'method-transfer',
  POS: 'method-pos',
  QR: 'method-qr',
}

export default function MethodTag({ method }: MethodTagProps) {
  return <span className={'method-tag ' + classByMethod[method]}>{method}</span>
}
