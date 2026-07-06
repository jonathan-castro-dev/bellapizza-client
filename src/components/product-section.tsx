import type { CategoryId, Product } from '../data/menu'
import { getCategoryById, getProductsByCategory, products } from '../data/menu'
import { ProductCard } from './product-card'

type ProductSectionProps = {
  selectedCategoryId: CategoryId
  showAllProducts: boolean
  onShowAllProducts: () => void
  onAddToCart: (product: Product) => void
}

export function ProductSection({
  selectedCategoryId,
  showAllProducts,
  onShowAllProducts,
  onAddToCart,
}: ProductSectionProps) {
  const category = getCategoryById(selectedCategoryId)
  const displayedProducts = showAllProducts
    ? products
    : getProductsByCategory(selectedCategoryId)

  return (
    <section className="flex flex-col gap-4 px-4">
      <div className="flex items-center justify-between">
        <h2 className="text-sm font-bold uppercase tracking-wide text-stone-600">
          {showAllProducts ? 'Todos os produtos' : (category?.name ?? 'Produtos')}
        </h2>
        <button
          type="button"
          onClick={onShowAllProducts}
          className="cursor-pointer text-sm font-bold text-red-700"
        >
          Ver tudo
        </button>
      </div>
      <div className="flex flex-col gap-4">
        {displayedProducts.map((product) => (
          <ProductCard key={product.id} product={product} onAddToCart={onAddToCart} />
        ))}
      </div>
    </section>
  )
}
