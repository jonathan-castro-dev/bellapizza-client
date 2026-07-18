import { Banknote, CreditCard, QrCode } from 'lucide-react'
import type { PaymentMethod } from '../api/submit-order'

type PaymentMethodSectionProps = {
  paymentMethod: PaymentMethod
  onPaymentMethodChange: (paymentMethod: PaymentMethod) => void
}

const paymentMethods = [
  {
    value: 'credit_card' as const,
    label: 'Cartão',
    icon: CreditCard,
    iconClassName: 'size-4 text-red-700',
  },
  {
    value: 'pix' as const,
    label: 'Pix',
    icon: QrCode,
    iconClassName: 'size-[18px] text-amber-800',
  },
  {
    value: 'cash' as const,
    label: 'Dinheiro',
    icon: Banknote,
    iconClassName: 'size-4 text-stone-600',
  },
]

export function PaymentMethodSection({
  paymentMethod,
  onPaymentMethodChange,
}: PaymentMethodSectionProps) {
  return (
    <section className="flex flex-col gap-4">
      <div className="flex items-center gap-2">
        <CreditCard className="size-4 text-red-700" aria-hidden="true" />
        <h2 className="text-2xl font-bold text-gray-900">Forma de Pagamento</h2>
      </div>

      <div className="flex flex-col gap-3">
        {paymentMethods.map(({ value, label, icon: Icon, iconClassName }) => {
          const isSelected = paymentMethod === value

          return (
            <label
              key={value}
              className={`flex cursor-pointer items-center justify-between rounded-xl border-2 bg-gray-100 ${
                isSelected ? 'border-red-700 px-[18px] py-[18px]' : 'border-transparent p-[18px]'
              }`}
            >
              <div className="flex items-center gap-4">
                <Icon className={iconClassName} aria-hidden="true" />
                <span className="text-sm font-semibold text-gray-900">{label}</span>
              </div>
              <input
                type="radio"
                name="payment-method"
                value={value}
                checked={isSelected}
                onChange={() => onPaymentMethodChange(value)}
                className="sr-only"
              />
              {isSelected ? (
                <div className="flex size-[22px] items-center justify-center rounded-full bg-red-700">
                  <div className="size-2 rounded-full bg-white" />
                </div>
              ) : (
                <div className="size-5 rounded-full border border-stone-400 bg-white" />
              )}
            </label>
          )
        })}
      </div>
    </section>
  )
}
