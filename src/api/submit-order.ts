import { api } from '@/services/api'
import { DELIVERY_FEE, type CartItem } from '../context/cart-context'

export type OrderType = 'delivery' | 'pickup'
export type PaymentMethod = 'credit_card' | 'pix' | 'cash'

export type DeliveryAddress = {
  zipCode: string
  street: string
  number: string
  complement: string
}

export type OrderCartItem = {
  productId: string
  productName: string
  quantity: number
  unitPrice: number
}

export type OrderPayload = {
  clientName: string
  orderType: OrderType
  deliveryAddress: DeliveryAddress
  paymentMethod: PaymentMethod
  cart: {
    items: OrderCartItem[]
    subtotal: number
    deliveryFee: number
    totalPrice: number
  }
}

type SubmitOrderInput = {
  clientName: string
  orderType: OrderType
  deliveryAddress: DeliveryAddress
  paymentMethod: PaymentMethod
  cartItems: CartItem[]
  subtotal: number
  totalPrice: number
}

function mapCartItems(cartItems: CartItem[]): OrderCartItem[] {
  return cartItems.map(({ product, quantity }) => ({
    productId: product.id,
    productName: product.name,
    quantity,
    unitPrice: product.price,
  }))
}

export async function submitOrder({
  clientName,
  orderType,
  deliveryAddress,
  paymentMethod,
  cartItems,
  subtotal,
  totalPrice,
}: SubmitOrderInput) {
  const payload: OrderPayload = {
    clientName,
    orderType,
    deliveryAddress,
    paymentMethod,
    cart: {
      items: mapCartItems(cartItems),
      subtotal,
      deliveryFee: DELIVERY_FEE,
      totalPrice,
    },
  }

  await api.post('/orders', payload)
}
