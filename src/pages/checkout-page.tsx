import { Check, MapPin, User } from 'lucide-react'
import { useMemo, useState } from 'react'
import { useNavigate } from 'react-router'
import { submitOrder } from '../api/submit-order'
import type { OrderType, PaymentMethod } from '../api/submit-order'
import { CheckoutSummary } from '../components/checkout-summary'
import { OrderTypeSection } from '../components/order-type-section'
import { PaymentMethodSection } from '../components/payment-method-section'
import { TextInput } from '../components/text-input'
import { CheckoutHeader } from '../components/checkout-header'
import { useCart } from '../context/cart-context'

export function CheckoutPage() {
  const navigate = useNavigate()
  const { cartItems, itemCount, subtotal, total, clearCart } = useCart()

  const [fullName, setFullName] = useState('')
  const [orderType, setOrderType] = useState<OrderType>('delivery')
  const [zipCode, setZipCode] = useState('')
  const [street, setStreet] = useState('')
  const [number, setNumber] = useState('')
  const [complement, setComplement] = useState('')
  const [paymentMethod, setPaymentMethod] = useState<PaymentMethod>('credit_card')

  const isFormValid = useMemo(() => {
    if (!fullName.trim()) {
      return false
    }

    if (orderType === 'delivery') {
      return (
        zipCode.trim() !== '' &&
        street.trim() !== '' &&
        number.trim() !== '' &&
        complement.trim() !== ''
      )
    }

    return true
  }, [fullName, orderType, zipCode, street, number, complement])

  function resetForm() {
    setFullName('')
    setOrderType('delivery')
    setZipCode('')
    setStreet('')
    setNumber('')
    setComplement('')
    setPaymentMethod('credit_card')
  }

  function handleConfirmOrder() {
    if (!isFormValid) {
      return
    }

    submitOrder({
      identification: { fullName },
      orderType,
      deliveryAddress: { zipCode, street, number, complement },
      paymentMethod,
      cartItems,
      subtotal,
      total,
    })

    resetForm()
    clearCart()
    navigate('/order-completed')
  }

  return (
    <div className="mx-auto flex min-h-screen w-full max-w-md flex-col bg-white pb-80">
      <CheckoutHeader itemCount={itemCount} />

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
            <User className="size-4 text-red-700" aria-hidden="true" />
            <h2 className="text-2xl font-bold text-gray-900">Identificação</h2>
          </div>

          <div className="rounded-xl border border-rose-200/60 bg-gray-100 p-4">
            <TextInput
              label="Nome Completo"
              placeholder="Seu nome completo"
              value={fullName}
              onChange={(event) => setFullName(event.target.value)}
            />
          </div>
        </section>

        <OrderTypeSection orderType={orderType} onOrderTypeChange={setOrderType} />

        {orderType === 'delivery' && (
          <section className="flex flex-col gap-4">
            <div className="flex items-center gap-2">
              <MapPin className="size-4 text-red-700" aria-hidden="true" />
              <h2 className="text-2xl font-bold text-gray-900">Endereço de Entrega</h2>
            </div>

            <div className="flex flex-col gap-4 rounded-xl border border-rose-200/60 bg-gray-100 p-4">
              <TextInput
                label="CEP"
                placeholder="00000-000"
                value={zipCode}
                onChange={(event) => setZipCode(event.target.value)}
              />
              <TextInput
                label="Rua"
                placeholder="Avenida Principal"
                value={street}
                onChange={(event) => setStreet(event.target.value)}
              />
              <div className="flex gap-4">
                <TextInput
                  label="Número"
                  placeholder="123"
                  value={number}
                  onChange={(event) => setNumber(event.target.value)}
                />
                <TextInput
                  label="Complemento"
                  placeholder="Apto 4B"
                  value={complement}
                  onChange={(event) => setComplement(event.target.value)}
                />
              </div>
            </div>
          </section>
        )}

        <PaymentMethodSection
          paymentMethod={paymentMethod}
          onPaymentMethodChange={setPaymentMethod}
        />
      </main>

      <CheckoutSummary
        subtotal={subtotal}
        total={total}
        onConfirm={handleConfirmOrder}
        isConfirmDisabled={!isFormValid}
      />
    </div>
  )
}
