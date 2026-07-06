import { ShoppingCart } from 'lucide-react'

type HeaderProps = {
  itemCount: number
}

export function Header({ itemCount }: HeaderProps) {
  return (
    <header className="flex h-14 shrink-0 items-center justify-between bg-gray-50 px-4 drop-shadow-sm">
      <h1 className="text-2xl font-extrabold text-red-700">BellaPizza</h1>
      <div className="relative opacity-80">
        <ShoppingCart className="size-5 text-red-700" aria-hidden="true" />
        {itemCount > 0 && (
          <span className="absolute -top-1 -right-1 flex size-4 items-center justify-center rounded-full bg-red-700 text-[10px] font-bold text-white">
            {itemCount}
          </span>
        )}
      </div>
    </header>
  )
}