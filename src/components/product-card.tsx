import { Plus } from 'lucide-react'
import type { Product } from '../data/menu'

type ProductCardProps = {
  product: Product
}

export function ProductCard({ product }: ProductCardProps) {
  return (
    <article className="flex overflow-hidden rounded-xl border border-rose-200/30 bg-white shadow-md">
      <img
        src={product.image}
        alt={product.name}
        className="aspect-square w-32 shrink-0 object-cover"
      />
      <div className="flex flex-1 flex-col justify-between p-4">
        <div className="flex flex-col gap-1">
          <h3 className="text-lg font-bold text-gray-900">{product.name}</h3>
          <p className="line-clamp-2 text-xs font-medium text-stone-600">
            {product.description}
          </p>
        </div>
        <div className="flex items-center justify-between pt-3">
          <span className="text-lg font-bold text-red-700">{product.price}</span>
          <div
            className="flex size-10 items-center justify-center rounded-full bg-red-700 shadow-md"
            aria-hidden="true"
          >
            <Plus className="size-4 text-white" />
          </div>
        </div>
      </div>
    </article>
  )
}
