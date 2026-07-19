import { useCart } from '../context/cart-context'
import { formatCurrency } from '../utils/format-currency'
import { useNavigate } from 'react-router'

type CartSummaryProps = {
  subtotal: number
  total: number
}

export function CartSummary({ subtotal, total }: CartSummaryProps) {
  const { cartItems } = useCart()
  const navigate = useNavigate()
  return (
    <footer className="fixed inset-x-0 bottom-0 border-t border-rose-200/30 bg-gray-50 shadow-lg">
      <div className="mx-auto flex w-full max-w-md flex-col gap-3 p-4">
        <div className="flex items-center justify-between">
          <span className="text-base text-stone-600">Subtotal</span>
          <span className="text-base font-medium text-stone-600">
            {formatCurrency(subtotal)}
          </span>
        </div>
        <div className="flex items-center justify-between">
          <span className="text-base text-stone-600">Taxa de Entrega</span>
          <span className="text-base font-medium text-amber-800">R$ 5,00</span>
        </div>
        <hr className="border-rose-200/30" />
        <div className="flex items-center justify-between">
          <span className="text-2xl font-bold text-gray-900">Total</span>
          <span className="text-2xl font-bold text-red-700">
            {formatCurrency(total)}
          </span>
        </div>
        <button
          type="button"
          onClick={() => navigate('/checkout')}
          disabled={cartItems.length === 0}
          className="flex h-14 w-full cursor-pointer items-center justify-center gap-2 rounded-xl bg-red-700 text-lg font-bold text-white shadow-md disabled:cursor-not-allowed disabled:opacity-50"
        >
          Finalizar pedido
        </button>
      </div>
    </footer>
  )
}
