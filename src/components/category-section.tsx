import type { CategoryId } from '../data/menu'
import { categories } from '../data/menu'

type CategorySectionProps = {
  selectedCategoryId: CategoryId
  onSelectCategory: (categoryId: CategoryId) => void
}

export function CategorySection({
  selectedCategoryId,
  onSelectCategory,
}: CategorySectionProps) {
  return (
    <section className="flex flex-col gap-3">
      <h2 className="px-4 text-sm font-bold uppercase tracking-wide text-stone-600">
        CATEGORIAS
      </h2>
      <div className="flex gap-2 overflow-x-auto px-4 pb-1">
        {categories.map((category) => {
          const Icon = category.icon
          const isActive = category.id === selectedCategoryId

          return (
            <button
              key={category.id}
              type="button"
              onClick={() => onSelectCategory(category.id)}
              className={`flex shrink-0 items-center gap-2 rounded-full px-5 py-3 text-sm font-semibold transition-colors ${
                isActive
                  ? 'bg-red-700 text-white'
                  : 'bg-gray-200 text-stone-600 hover:bg-gray-300'
              }`}
            >
              <Icon
                className={`size-4 ${isActive ? 'text-white' : 'text-stone-600'}`}
                aria-hidden="true"
              />
              <span>{category.name}</span>
            </button>
          )
        })}
      </div>
    </section>
  )
}
