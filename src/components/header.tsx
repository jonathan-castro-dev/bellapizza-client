import { ShoppingCart } from 'lucide-react'

export function Header() {
  return (
    <header className="flex h-14 shrink-0 items-center justify-between bg-gray-50 px-4 drop-shadow-sm">
      <h1 className="text-2xl font-extrabold text-red-700">BellaPizza</h1>
      <div className="opacity-80">
        <ShoppingCart className="size-5 text-red-700" aria-hidden="true" />
      </div>
    </header>
  )
}
