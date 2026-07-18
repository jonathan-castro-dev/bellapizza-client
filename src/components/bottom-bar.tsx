import { Link } from 'react-router'

type BottomBarProps = {
  hasItems: boolean
}

const buttonClassName =
  'flex mx-auto h-14 w-full max-w-md items-center justify-center gap-2 rounded-xl bg-red-700 text-lg font-bold text-white shadow-md'

export function BottomBar({ hasItems }: BottomBarProps) {
  return (
    <footer className="fixed inset-x-0 bottom-0 border-t border-rose-200 bg-gray-50 px-4 pb-4 pt-4">
      {hasItems ? (
        <Link to="/cart" className={buttonClassName}>
          <span>Comprar</span>
        </Link>
      ) : (
        <div
          className={`${buttonClassName} cursor-not-allowed opacity-50`}
          aria-disabled="true"
        >
          <span>Comprar</span>
        </div>
      )}
    </footer>
  )
}
