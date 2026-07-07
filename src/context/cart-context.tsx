import { createContext, useContext, useMemo, useState, type ReactNode } from 'react'
import type { Product } from '../data/menu'

export const DELIVERY_FEE = 5

export type CartItem = {
  product: Product
  quantity: number
}

type CartContextValue = {
  cartItems: CartItem[]
  itemCount: number
  subtotal: number
  total: number
  addToCart: (product: Product) => void
  incrementQuantity: (productId: string) => void
  decrementQuantity: (productId: string) => void
}

const CartContext = createContext<CartContextValue | null>(null)

export function CartProvider({ children }: { children: ReactNode }) {
  const [cartItems, setCartItems] = useState<CartItem[]>([])

  function addToCart(product: Product) {
    setCartItems((currentItems) => {
      const existingItem = currentItems.find((item) => item.product.id === product.id)

      if (existingItem) {
        return currentItems.map((item) =>
          item.product.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item,
        )
      }

      return [...currentItems, { product, quantity: 1 }]
    })
  }

  function incrementQuantity(productId: string) {
    setCartItems((currentItems) =>
      currentItems.map((item) =>
        item.product.id === productId
          ? { ...item, quantity: item.quantity + 1 }
          : item,
      ),
    )
  }

  function decrementQuantity(productId: string) {
    setCartItems((currentItems) =>
      currentItems
        .map((item) =>
          item.product.id === productId
            ? { ...item, quantity: item.quantity - 1 }
            : item,
        )
        .filter((item) => item.quantity > 0),
    )
  }

  const itemCount = useMemo(
    () => cartItems.reduce((total, item) => total + item.quantity, 0),
    [cartItems],
  )

  const subtotal = useMemo(
    () =>
      cartItems.reduce(
        (total, item) => total + item.product.price * item.quantity,
        0,
      ),
    [cartItems],
  )

  const total = useMemo(() => subtotal + DELIVERY_FEE, [subtotal])

  const value = useMemo(
    () => ({
      cartItems,
      itemCount,
      subtotal,
      total,
      addToCart,
      incrementQuantity,
      decrementQuantity,
    }),
    [cartItems, itemCount, subtotal, total],
  )

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>
}

// eslint-disable-next-line react-refresh/only-export-components
export function useCart() {
  const context = useContext(CartContext)

  if (!context) {
    throw new Error('useCart must be used within a CartProvider')
  }

  return context
}
