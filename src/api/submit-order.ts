import { DELIVERY_FEE, type CartItem } from '../context/cart-context'

export type OrderType = 'delivery' | 'pickup'
export type PaymentMethod = 'credit_card' | 'pix' | 'cash'

export type OrderIdentification = {
  fullName: string
}

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
  createdAt: string
  identification: OrderIdentification
  orderType: OrderType
  deliveryAddress: DeliveryAddress
  paymentMethod: PaymentMethod
  cart: {
    items: OrderCartItem[]
    subtotal: number
    deliveryFee: number
    total: number
  }
}

type SubmitOrderInput = {
  identification: OrderIdentification
  orderType: OrderType
  deliveryAddress: DeliveryAddress
  paymentMethod: PaymentMethod
  cartItems: CartItem[]
  subtotal: number
  total: number
}

function mapCartItems(cartItems: CartItem[]): OrderCartItem[] {
  return cartItems.map(({ product, quantity }) => ({
    productId: product.id,
    productName: product.name,
    quantity,
    unitPrice: product.price,
  }))
}

export function submitOrder({
  identification,
  orderType,
  deliveryAddress,
  paymentMethod,
  cartItems,
  subtotal,
  total,
}: SubmitOrderInput): void {
  const payload: OrderPayload = {
    createdAt: new Date().toISOString(),
    identification,
    orderType,
    deliveryAddress,
    paymentMethod,
    cart: {
      items: mapCartItems(cartItems),
      subtotal,
      deliveryFee: DELIVERY_FEE,
      total,
    },
  }

  console.log(payload)
}
