import { CartProvider } from './context/cart-context'
import { MenuPage } from './pages/menu-page'

export function App() {
  return (
    <CartProvider>
      <MenuPage />
    </CartProvider>
  )
}
