import type { Product } from '@/api/get-products'
import { ProductCard } from './product-card'

type ProductSectionProps = {
  title: string
  products: Product[]
  isLoading: boolean
  isError: boolean
  onRetry: () => void
  onShowAllProducts: () => void
  onAddToCart: (product: Product) => void
}

function ProductCardSkeleton() {
  return (
    <div className="flex animate-pulse overflow-hidden rounded-xl border border-rose-200/30 bg-white shadow-md">
      <div className="aspect-square w-32 shrink-0 bg-gray-200" />
      <div className="flex flex-1 flex-col gap-3 p-4">
        <div className="h-5 w-2/3 rounded bg-gray-200" />
        <div className="h-3 w-full rounded bg-gray-200" />
        <div className="mt-auto h-6 w-1/3 rounded bg-gray-200" />
      </div>
    </div>
  )
}

export function ProductSection({
  title,
  products,
  isLoading,
  isError,
  onRetry,
  onShowAllProducts,
  onAddToCart,
}: ProductSectionProps) {
  return (
    <section className="flex flex-col gap-4 px-4">
      <div className="flex items-center justify-between">
        <h2 className="text-sm font-bold uppercase tracking-wide text-stone-600">
          {title}
        </h2>
        <button
          type="button"
          onClick={onShowAllProducts}
          className="cursor-pointer text-sm font-bold text-red-700"
        >
          Ver tudo
        </button>
      </div>
      {isError ? (
        <div className="flex flex-col items-center gap-3 rounded-xl border border-rose-200/30 bg-white p-6 text-center shadow-sm">
          <p className="text-sm font-medium text-stone-600">
            Não foi possível carregar os produtos.
          </p>
          <button
            type="button"
            onClick={onRetry}
            className="cursor-pointer rounded-full bg-red-700 px-5 py-2 text-sm font-bold text-white shadow-md"
          >
            Tentar novamente
          </button>
        </div>
      ) : (
        <div className="flex flex-col gap-4">
          {isLoading ? (
            Array.from({ length: 3 }, (_, index) => <ProductCardSkeleton key={index} />)
          ) : products.length === 0 ? (
            <p className="text-sm font-medium text-stone-600">
              Nenhum produto disponível no momento.
            </p>
          ) : (
            products.map((product) => (
              <ProductCard
                key={product.id}
                product={product}
                onAddToCart={onAddToCart}
              />
            ))
          )}
        </div>
      )}
    </section>
  )
}
