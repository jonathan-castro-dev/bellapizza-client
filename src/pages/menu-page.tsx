import { useState } from 'react'
import { BottomBar } from '../components/bottom-bar'
import { CategorySection } from '../components/category-section'
import { Header } from '../components/header'
import { ProductSection } from '../components/product-section'
import type { CategoryId } from '../data/menu'

export function MenuPage() {
  const [selectedCategoryId, setSelectedCategoryId] = useState<CategoryId>('pizzas')

  return (
    <div className="mx-auto flex min-h-screen w-full max-w-md flex-col bg-gray-50 pb-34">
      <Header />
      <main className="flex flex-col gap-6 pt-4">
        <CategorySection
          selectedCategoryId={selectedCategoryId}
          onSelectCategory={setSelectedCategoryId}
        />
        <ProductSection selectedCategoryId={selectedCategoryId} />
      </main>
      <BottomBar />
    </div>
  )
}
