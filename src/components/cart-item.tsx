import { Minus, Plus } from 'lucide-react'
import type { Product } from '../data/menu'

type CartItemProps = {
  product: Product
  quantity: number
}

export function CartItem({ product, quantity }: CartItemProps) {
  return (
    <article className="flex gap-4 rounded-xl border border-rose-200/30 bg-white p-4 shadow-sm">
      <img
        src={product.image}
        alt={product.name}
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
          <span className="text-base font-bold text-red-700">{product.price}</span>
          <div
            className="flex items-center gap-3 rounded-full bg-gray-200 px-2 py-1"
            aria-hidden="true"
          >
            <div className="flex size-6 items-center justify-center">
              <Minus className="size-3 text-red-700" strokeWidth={3} />
            </div>
            <span className="text-base text-gray-900">{quantity}</span>
            <div className="flex size-6 items-center justify-center">
              <Plus className="size-3 text-red-700" strokeWidth={3} />
            </div>
          </div>
        </div>
      </div>
    </article>
  )
}
