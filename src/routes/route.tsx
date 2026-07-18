import { createBrowserRouter } from 'react-router'
import { CartPage } from '../pages/cart-page'
import { CheckoutPage } from '../pages/checkout-page'
import { MenuPage } from '../pages/menu-page'
import { OrderCompletedPage } from '../pages/order-completed'

export const router = createBrowserRouter([
  {
    path: '/',
    element: <MenuPage />,
  },
  {
    path: '/cart',
    element: <CartPage />,
  },
  {
    path: '/checkout',
    element: <CheckoutPage />,
  },
  {
    path: '/order-completed',
    element: <OrderCompletedPage />,
  },
])
