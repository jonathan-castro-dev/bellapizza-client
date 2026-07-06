import { useState } from 'react'
import { BottomBar } from '../components/bottom-bar'
import { CategorySection } from '../components/category-section'
import { Header } from '../components/header'
import { ProductSection } from '../components/product-section'
import { useCart } from '../context/cart-context'
import type { CategoryId } from '../data/menu'

export function MenuPage() {
  const { itemCount, addToCart } = useCart()
  const [selectedCategoryId, setSelectedCategoryId] = useState<CategoryId>('pizzas')
  const [showAllProducts, setShowAllProducts] = useState(false)

  function handleSelectCategory(categoryId: CategoryId) {
    setSelectedCategoryId(categoryId)
    setShowAllProducts(false)
  }

  return (
    <div className="mx-auto flex min-h-screen w-full max-w-md flex-col bg-gray-50 pb-34">
      <Header itemCount={itemCount} />
      <main className="flex flex-col gap-6 pt-4">
        <CategorySection
          selectedCategoryId={selectedCategoryId}
          showAllProducts={showAllProducts}
          onSelectCategory={handleSelectCategory}
        />
        <ProductSection
          selectedCategoryId={selectedCategoryId}
          showAllProducts={showAllProducts}
          onShowAllProducts={() => setShowAllProducts(true)}
          onAddToCart={addToCart}
        />
      </main>
      <BottomBar />
    </div>
  )
}
