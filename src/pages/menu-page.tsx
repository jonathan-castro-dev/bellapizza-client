import { useMemo, useState } from 'react'
import { BottomBar } from '@/components/bottom-bar'
import { CategorySection } from '@/components/category-section'
import { Header } from '@/components/header'
import { ProductSection } from '@/components/product-section'
import { useCart } from '@/context/cart-context'
import { getCategoriesFromProducts } from '@/data/categories'
import { useProducts } from '@/hooks/use-products'

export function MenuPage() {
  const { itemCount, addToCart } = useCart()
  const { data: products, isLoading, isError, refetch } = useProducts()
  const [selectedCategoryId, setSelectedCategoryId] = useState<string | null>(null)
  const [showAllProducts, setShowAllProducts] = useState(false)

  const categories = useMemo(
    () => getCategoriesFromProducts(products ?? []),
    [products],
  )

  const activeCategoryId = selectedCategoryId ?? categories[0]?.id ?? null
  const activeCategory = categories.find((category) => category.id === activeCategoryId)

  const displayedProducts = useMemo(() => {
    if (!products) {
      return []
    }

    return showAllProducts
      ? products
      : products.filter((product) => product.category === activeCategoryId)
  }, [products, showAllProducts, activeCategoryId])

  function handleSelectCategory(categoryId: string) {
    setSelectedCategoryId(categoryId)
    setShowAllProducts(false)
  }

  return (
    <div className="mx-auto flex min-h-screen w-full max-w-md flex-col bg-gray-50 pb-34">
      <Header itemCount={itemCount} />
      <main className="flex flex-col gap-6 pt-4">
        <CategorySection
          categories={categories}
          selectedCategoryId={activeCategoryId}
          showAllProducts={showAllProducts}
          isLoading={isLoading}
          onSelectCategory={handleSelectCategory}
        />
        <ProductSection
          title={showAllProducts ? 'Todos os produtos' : (activeCategory?.name ?? 'Produtos')}
          products={displayedProducts}
          isLoading={isLoading}
          isError={isError}
          onRetry={() => refetch()}
          onShowAllProducts={() => setShowAllProducts(true)}
          onAddToCart={addToCart}
        />
      </main>
      <BottomBar hasItems={itemCount > 0} />
    </div>
  )
}
