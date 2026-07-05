import type { CategoryId } from '../data/menu'
import { getCategoryById, getProductsByCategory } from '../data/menu'
import { ProductCard } from './product-card'

type ProductSectionProps = {
  selectedCategoryId: CategoryId
}

export function ProductSection({ selectedCategoryId }: ProductSectionProps) {
  const category = getCategoryById(selectedCategoryId)
  const categoryProducts = getProductsByCategory(selectedCategoryId)

  return (
    <section className="flex flex-col gap-4 px-4">
      <div className="flex items-center justify-between">
        <h2 className="text-sm font-bold uppercase tracking-wide text-stone-600">
          {category?.name ?? 'Produtos'}
        </h2>
        <span className="text-sm font-bold text-red-700">Ver tudo</span>
      </div>
      <div className="flex flex-col gap-4">
        {categoryProducts.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </section>
  )
}
