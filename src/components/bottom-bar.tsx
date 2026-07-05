import { ShoppingCart } from 'lucide-react'

export function BottomBar() {
  return (
    <footer className="fixed inset-x-0 bottom-0 border-t border-rose-200 bg-gray-50 px-4 pb-4 pt-4">
      <div className="mx-auto flex h-14 w-full max-w-md items-center justify-center gap-2 rounded-xl bg-red-700 text-lg text-white shadow-md">
        <ShoppingCart className="size-5" aria-hidden="true" />
        <span>Comprar</span>
      </div>
    </footer>
  )
}
