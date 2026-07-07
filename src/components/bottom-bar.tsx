import { ShoppingCart } from 'lucide-react'
import { Link } from 'react-router'

type BottomBarProps = {
  hasItems: boolean
}

const buttonClassName =
  'mx-auto flex h-14 w-full max-w-md items-center justify-center gap-2 rounded-xl bg-red-700 text-lg text-white shadow-md'

export function BottomBar({ hasItems }: BottomBarProps) {
  return (
    <footer className="fixed inset-x-0 bottom-0 border-t border-rose-200 bg-gray-50 px-4 pb-4 pt-4">
      {hasItems ? (
        <Link to="/cart" className={buttonClassName}>
          <ShoppingCart className="size-5" aria-hidden="true" />
          <span>Comprar</span>
        </Link>
      ) : (
        <div
          className={`${buttonClassName} cursor-not-allowed opacity-50`}
          aria-disabled="true"
        >
          <ShoppingCart className="size-5" aria-hidden="true" />
          <span>Comprar</span>
        </div>
      )}
    </footer>
  )
}
