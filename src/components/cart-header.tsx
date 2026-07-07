import { ChevronLeft, ShoppingCart } from 'lucide-react'
import { Link } from 'react-router'

type CartHeaderProps = {
  itemCount: number
}

export function CartHeader({ itemCount }: CartHeaderProps) {
  return (
    <header className="flex h-14 shrink-0 items-center justify-between bg-gray-50 px-4 drop-shadow-sm">
      <div className="flex items-center gap-3">
        <Link to="/">
          <ChevronLeft className="size-4 text-red-700" aria-hidden="true" />
        </Link>
        <h1 className="text-2xl font-extrabold text-red-700">Meu Carrinho</h1>
      </div>
      <div className="relative">
        <ShoppingCart className="size-5 text-gray-900" aria-hidden="true" />
        <span className="absolute -top-1 -right-1 flex size-4 items-center justify-center rounded-full bg-red-700 text-[10px] font-bold text-white">
          {itemCount}
        </span>
      </div>
    </header>
  )
}
