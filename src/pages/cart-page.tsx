import { CartHeader } from '../components/cart-header'
import { CartItem } from '../components/cart-item'
import { CartSummary } from '../components/cart-summary'
import { products } from '../data/menu'

const margherita = products.find((product) => product.id === 'margherita-premium')!
const cocaCola2Litros = products.find((product) => product.id === 'coca-cola-2-litro')!

const cartItems = [
  { product: margherita, quantity: 1 },
  { product: cocaCola2Litros, quantity: 1 },
]

export function CartPage() {
  return (
    <div className="mx-auto flex min-h-screen w-full max-w-md flex-col bg-gray-50 pb-72">
      <CartHeader itemCount={cartItems.length} />
      <main className="flex flex-col gap-4 px-4 py-6">
        {cartItems.map(({ product, quantity }) => (
          <CartItem key={product.id} product={product} quantity={quantity} />
        ))}
      </main>
      <CartSummary subtotal="R$ 69,80" deliveryFee="R$ 5,00" total="R$ 74,80" />
    </div>
  )
}
