import type { LucideIcon } from 'lucide-react'
import { CupSoda, IceCreamCone, Pizza, Salad, UtensilsCrossed } from 'lucide-react'
import type { Product } from '@/api/get-products'

export type Category = {
  id: string
  name: string
  icon: LucideIcon
}

const knownCategories: Record<string, Omit<Category, 'id'>> = {
  pizzas: { name: 'Pizzas', icon: Pizza },
  refrigerantes: { name: 'Refrigerantes', icon: CupSoda },
  sobremesas: { name: 'Sobremesas', icon: IceCreamCone },
  entradas: { name: 'Entradas', icon: Salad },
}

const categoryOrder = Object.keys(knownCategories)

function orderIndex(categoryId: string) {
  const index = categoryOrder.indexOf(categoryId)

  return index === -1 ? categoryOrder.length : index
}

export function getCategoriesFromProducts(products: Product[]): Category[] {
  const categoryIds = [...new Set(products.map((product) => product.category))]

  return categoryIds
    .sort((a, b) => orderIndex(a) - orderIndex(b))
    .map((id) => ({ id, ...(knownCategories[id] ?? { name: id, icon: UtensilsCrossed }) }))
}
