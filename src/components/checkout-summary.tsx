import { formatCurrency } from '../utils/format-currency'

type CheckoutSummaryProps = {
  subtotal: number
  total: number
  onConfirm: () => void
  isConfirmDisabled: boolean
}

export function CheckoutSummary({
  subtotal,
  total,
  onConfirm,
  isConfirmDisabled,
}: CheckoutSummaryProps) {
  return (
    <footer className="fixed inset-x-0 bottom-0 border-t border-rose-200/60 bg-gray-200 shadow-lg">
      <div className="mx-auto flex w-full max-w-md flex-col gap-4 px-6 pb-6 pt-6">
        <h3 className="text-sm font-semibold tracking-wider text-gray-900 uppercase">
          Resumo do Pedido
        </h3>

        <div className="flex flex-col gap-2 border-b border-rose-200/60">
          <div className="flex items-center justify-between">
            <span className="text-base text-stone-600">
              Subtotal
            </span>
            <span className="text-base text-gray-900">{formatCurrency(subtotal)}</span>
          </div>
          <div className="flex items-center justify-between">
            <span className="text-base text-stone-600">Taxa de Entrega</span>
            <span className="text-base text-gray-900">R$ 5,00</span>
          </div>
        </div>

        <div className="flex items-center justify-between pt-2">
          <span className="text-2xl font-bold text-gray-900">Total</span>
          <span className="text-2xl font-bold text-red-700">{formatCurrency(total)}</span>
        </div>

        <button
          type="button"
          onClick={onConfirm}
          disabled={isConfirmDisabled}
          className="flex h-14 w-full cursor-pointer items-center justify-center gap-2 rounded-xl bg-red-700 text-lg font-bold text-white shadow-md disabled:cursor-not-allowed disabled:opacity-50"
        >
          Confirmar Pedido
        </button>
      </div>
    </footer>
  )
}
