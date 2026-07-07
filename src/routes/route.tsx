import { createBrowserRouter } from 'react-router'
import { CartPage } from '../pages/cart-page'
import { MenuPage } from '../pages/menu-page'

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
    element: undefined,
  },
])
