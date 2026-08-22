import { Minus, Plus } from 'lucide-react'
import type { Product } from '@/api/get-products'
import { formatCurrency } from '@/utils/format-currency'
import { ProductImage } from './product-image'

type CartItemProps = {
  product: Product
  quantity: number
  onIncrement: () => void
  onDecrement: () => void
}

export function CartItem({
  product,
  quantity,
  onIncrement,
  onDecrement,
}: CartItemProps) {
  const lineTotal = product.price * quantity

  return (
    <article className="flex gap-4 rounded-xl border border-rose-200/30 bg-white p-4 shadow-sm">
      <ProductImage
        product={product}
        className="size-24 shrink-0 rounded-lg object-cover"
      />
      <div className="flex min-w-0 flex-1 flex-col justify-between">
        <div className="flex flex-col gap-1">
          <h3 className="text-base text-gray-900">{product.name}</h3>
          <p className="line-clamp-2 text-xs font-medium text-stone-600">
            {product.description}
          </p>
        </div>
        <div className="flex items-center justify-between pt-2">
          <span className="text-base font-bold text-red-700">
            {formatCurrency(lineTotal)}
          </span>
          <div className="flex items-center gap-3 rounded-full bg-gray-200 px-2 py-1">
            <button
              type="button"
              onClick={onDecrement}
              className="flex size-6 cursor-pointer items-center justify-center"
              aria-label={`Diminuir quantidade de ${product.name}`}
            >
              <Minus className="size-3 text-red-700" strokeWidth={3} />
            </button>
            <span className="text-base text-gray-900">{quantity}</span>
            <button
              type="button"
              onClick={onIncrement}
              className="flex size-6 cursor-pointer items-center justify-center"
              aria-label={`Aumentar quantidade de ${product.name}`}
            >
              <Plus className="size-3 text-red-700" strokeWidth={3} />
            </button>
          </div>
        </div>
      </div>
    </article>
  )
}
