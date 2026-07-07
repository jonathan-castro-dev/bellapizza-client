import { RouterProvider } from 'react-router'
import { CartProvider } from './context/cart-context'
import { router } from './routes/route'

export function App() {
  return (
    <CartProvider>
      <RouterProvider router={router} />
    </CartProvider>
  )
}
