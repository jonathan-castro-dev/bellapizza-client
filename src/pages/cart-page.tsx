import { CartHeader } from '../components/cart-header'
import { CartItem } from '../components/cart-item'
import { CartSummary } from '../components/cart-summary'
import { useCart } from '../context/cart-context'

export function CartPage() {
  const { cartItems, itemCount, subtotal, total, incrementQuantity, decrementQuantity } =
    useCart()

  return (
    <div className="mx-auto flex min-h-screen w-full max-w-md flex-col bg-gray-50 pb-72">
      <CartHeader itemCount={itemCount} />
      <main className="flex flex-col gap-4 px-4 py-6">
        {cartItems.map(({ product, quantity }) => (
          <CartItem
            key={product.id}
            product={product}
            quantity={quantity}
            onIncrement={() => incrementQuantity(product.id)}
            onDecrement={() => decrementQuantity(product.id)}
          />
        ))}
      </main>
      <CartSummary subtotal={subtotal} total={total} />
    </div>
  )
}
