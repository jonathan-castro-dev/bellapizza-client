import { ShoppingCart } from 'lucide-react'

type CartSummaryProps = {
  subtotal: string
  deliveryFee: string
  total: string
}

export function CartSummary({ subtotal, deliveryFee, total }: CartSummaryProps) {
  return (
    <footer className="fixed inset-x-0 bottom-0 border-t border-rose-200/30 bg-gray-50 shadow-lg">
      <div className="mx-auto flex w-full max-w-md flex-col gap-3 p-4">
        <div className="flex items-center justify-between">
          <span className="text-base text-stone-600">Subtotal</span>
          <span className="text-base font-medium text-stone-600">{subtotal}</span>
        </div>
        <div className="flex items-center justify-between">
          <span className="text-base text-stone-600">Taxa de Entrega</span>
          <span className="text-base font-medium text-amber-800">{deliveryFee}</span>
        </div>
        <hr className="border-rose-200/30" />
        <div className="flex items-center justify-between">
          <span className="text-2xl font-bold text-gray-900">Total</span>
          <span className="text-2xl font-bold text-red-700">{total}</span>
        </div>
        <button
          type="button"
          className="flex h-14 w-full items-center justify-center gap-2 rounded-xl bg-red-700 text-lg font-bold text-white shadow-md"
        >
          Finalizar Pedido
          <ShoppingCart className="size-5" aria-hidden="true" />
        </button>
      </div>
    </footer>
  )
}
