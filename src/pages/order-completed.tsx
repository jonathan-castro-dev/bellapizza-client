import { Clock } from 'lucide-react'
import confirmIcon from '../assets/icons/confirm.png'
import { Link } from 'react-router'

export function OrderCompletedPage() {
  return (
    <div className="mx-auto flex min-h-screen w-full max-w-md flex-col bg-[#f8f9fa]">
      <header className="flex h-16 shrink-0 items-center px-4">
        <h1 className="text-2xl font-extrabold tracking-tight text-[#b90027]">BellaPizza</h1>
      </header>

      <main className="flex flex-1 flex-col items-center gap-8 px-6 pb-12 pt-8">
        <div className="flex flex-col items-center gap-4">
          <img
            src={confirmIcon}
            alt=""
            className="size-24"
            aria-hidden="true"
          />

          <h2 className="text-center text-2xl font-bold leading-8 text-[#191c1d]">
            Pedido realizado com
            <br />
            sucesso!
          </h2>

          <p className="text-center text-lg leading-[29px] text-[#5d3f3e]">
            Seu pedido já está sendo preparado com
            <br />
            muito carinho e logo sairá para entrega.
            <br />
            Prepare a mesa!
          </p>
        </div>

        <div className="flex w-full flex-col items-center gap-1 rounded-xl border border-[#e6bdbb] bg-[#f3f4f5] px-6 py-6">
          <Clock className="size-6 text-amber-500" aria-hidden="true" />
          <span className="text-xs font-medium uppercase tracking-wider text-[#5d3f3e]">
            Tempo estimado
          </span>
          <span className="text-2xl font-bold text-[#191c1d]">30-45 min</span>
        </div>

        <Link
          to="/"
          className="flex h-14 w-full cursor-pointer items-center justify-center gap-3 rounded-xl bg-[#e31837] py-4 text-lg font-bold text-[#fffaf9] shadow-[0px_10px_15px_-3px_rgba(227,24,55,0.2),0px_4px_6px_-4px_rgba(227,24,55,0.2)]"
        >
          Fazer novo pedido
        </Link>
      </main>
    </div>
  )
}
