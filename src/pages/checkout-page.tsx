import {
  Banknote,
  Check,
  ChevronLeft,
  ChevronRight,
  CreditCard,
  Home,
  MapPin,
  QrCode,
  ShoppingCart,
  Store,
  Truck,
} from 'lucide-react'
import { Link } from 'react-router'
import { Checkbox } from '../components/checkbox'
import { TextInput } from '../components/text-input'

export function CheckoutPage() {
  return (
    <div className="mx-auto flex min-h-screen w-full max-w-md flex-col bg-white pb-80">
      <header className="flex h-14 shrink-0 items-center justify-between bg-gray-50 px-4 drop-shadow-sm">
        <div className="flex items-center gap-4">
          <Link to="/cart">
            <ChevronLeft className="size-4 text-red-700" aria-hidden="true" />
          </Link>
          <h1 className="text-2xl font-extrabold text-red-700">Checkout</h1>
        </div>
        <ShoppingCart className="size-5 text-gray-900" aria-hidden="true" />
      </header>

      <main className="flex flex-col gap-8 px-4 pt-6">
        <div className="flex items-center justify-between px-2">
          <div className="flex flex-col items-center gap-1">
            <div className="flex size-8 items-center justify-center rounded-full bg-red-700">
              <Check className="size-3.5 text-white" aria-hidden="true" />
            </div>
            <span className="text-xs font-medium text-red-700">Carrinho</span>
          </div>

          <div className="mb-5 h-0.5 flex-1 bg-red-700" />

          <div className="flex flex-col items-center gap-1">
            <div className="flex size-8 items-center justify-center rounded-full bg-red-700">
              <span className="text-base font-bold text-white">2</span>
            </div>
            <span className="text-xs font-medium text-red-700">Detalhes</span>
          </div>

          <div className="mb-5 h-0.5 flex-1 bg-gray-200" />

          <div className="flex flex-col items-center gap-1">
            <div className="flex size-8 items-center justify-center rounded-full bg-gray-200">
              <span className="text-base font-bold text-stone-600">3</span>
            </div>
            <span className="text-xs font-medium text-stone-600">Concluir</span>
          </div>
        </div>

        <section className="flex flex-col gap-4">
          <div className="flex items-center gap-2">
            <Truck className="size-4 text-red-700" aria-hidden="true" />
            <h2 className="text-2xl font-bold text-gray-900">Tipo de Pedido</h2>
          </div>

          <div className="flex gap-3">
            <Checkbox
              name="order-type"
              label="Entrega"
              checked
              readOnly
              icon={<Home className="size-4 text-red-700" aria-hidden="true" />}
            />
            <Checkbox
              name="order-type"
              label="Retirada"
              readOnly
              icon={<Store className="size-4 text-amber-800" aria-hidden="true" />}
            />
          </div>
        </section>

        <section className="flex flex-col gap-4">
          <div className="flex items-center gap-2">
            <MapPin className="size-4 text-red-700" aria-hidden="true" />
            <h2 className="text-2xl font-bold text-gray-900">Endereço de Entrega</h2>
          </div>

          <div className="flex flex-col gap-4 rounded-xl border border-rose-200/60 bg-gray-100 p-4">
            <TextInput label="CEP" placeholder="00000-000" readOnly />
            <TextInput label="Rua" placeholder="Avenida Principal" readOnly />
            <div className="flex gap-4">
              <TextInput label="Número" placeholder="123" readOnly />
              <TextInput label="Complemento" placeholder="Apto 4B" readOnly />
            </div>
          </div>
        </section>

        <section className="flex flex-col gap-4">
          <div className="flex items-center gap-2">
            <CreditCard className="size-4 text-red-700" aria-hidden="true" />
            <h2 className="text-2xl font-bold text-gray-900">Forma de Pagamento</h2>
          </div>

          <div className="flex flex-col gap-3">
            <label className="flex cursor-pointer items-center justify-between rounded-xl border-2 border-red-700 bg-gray-100 px-[18px] py-[18px]">
              <div className="flex items-center gap-4">
                <CreditCard className="size-4 text-red-700" aria-hidden="true" />
                <span className="text-sm font-semibold text-gray-900">Cartão de Crédito</span>
              </div>
              <div className="flex size-[22px] items-center justify-center rounded-full bg-red-700">
                <div className="size-2 rounded-full bg-white" />
              </div>
            </label>

            <label className="flex cursor-pointer items-center justify-between rounded-xl border-2 border-transparent bg-gray-100 p-[18px]">
              <div className="flex items-center gap-4">
                <QrCode className="size-[18px] text-amber-800" aria-hidden="true" />
                <span className="text-sm font-semibold text-gray-900">Pix</span>
              </div>
              <div className="size-5 rounded-full border border-stone-400 bg-white" />
            </label>

            <label className="flex cursor-pointer items-center justify-between rounded-xl border-2 border-transparent bg-gray-100 p-[18px]">
              <div className="flex items-center gap-4">
                <Banknote className="size-4 text-stone-600" aria-hidden="true" />
                <span className="text-sm font-semibold text-gray-900">Dinheiro na Entrega</span>
              </div>
              <div className="size-5 rounded-full border border-stone-400 bg-white" />
            </label>
          </div>
        </section>
      </main>

      <footer className="fixed inset-x-0 bottom-0 border-t border-rose-200/60 bg-gray-200 shadow-lg">
        <div className="mx-auto flex w-full max-w-md flex-col gap-4 px-6 pb-6 pt-6">
          <h3 className="text-sm font-semibold tracking-wider text-gray-900 uppercase">
            Resumo do Pedido
          </h3>

          <div className="flex flex-col gap-2 border-b border-rose-200/60 pb-4">
            <div className="flex items-center justify-between">
              <span className="text-base text-stone-600">Subtotal (2 itens)</span>
              <span className="text-base text-gray-900">R$ 84,00</span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-base text-stone-600">Taxa de Entrega</span>
              <span className="text-base text-gray-900">R$ 7,50</span>
            </div>
          </div>

          <div className="flex items-center justify-between pt-2">
            <span className="text-2xl font-bold text-gray-900">Total</span>
            <span className="text-2xl font-bold text-red-700">R$ 91,50</span>
          </div>

          <button
            type="button"
            className="flex w-full items-center justify-center gap-2 rounded-xl bg-red-700 py-4 text-2xl font-bold text-white shadow-md"
          >
            Confirmar Pedido
            <ChevronRight className="size-3" aria-hidden="true" />
          </button>
        </div>
      </footer>
    </div>
  )
}
