import { api } from '@/services/api'

export type Product = {
  id: string
  category: string
  name: string
  description: string
  price: number
}

export async function getProducts(): Promise<Product[]> {
  const response = await api.get('/products')

  const { products }: { products: Product[] } = response.data

  return products
}
